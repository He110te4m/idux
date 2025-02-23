/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import type { SelectProps } from '../types'
import type { MergedOption } from './useOptions'
import type { ValueAccessor } from '@idux/cdk/forms'
import type { ComputedRef } from 'vue'

import { computed, toRaw } from 'vue'

import { callEmit, convertArray } from '@idux/cdk/utils'

import { generateOption } from '../utils/generateOption'

export interface SelectedStateContext {
  selectedValue: ComputedRef<any[]>
  selectedOptions: ComputedRef<MergedOption[]>
  changeSelected: (value: any) => void
  handleItemRemove: (value: any) => void
  handleClear: (evt: MouseEvent) => void
}

export function useSelectedState(
  props: SelectProps,
  accessor: ValueAccessor,
  mergedOptions: ComputedRef<MergedOption[]>,
): SelectedStateContext {
  const selectedValue = computed(() => convertArray(accessor.valueRef.value))
  const selectedOptions = computed(() => {
    const compareFn = props.compareWith ?? props.compareFn
    const options = mergedOptions.value
    return selectedValue.value.map(
      value => options.find(option => compareFn(option.value, value)) ?? generateOption(value),
    )
  })

  const setValue = (value: any[]) => {
    const currValue = props.multiple ? value : value[0]
    const oldValue = toRaw(accessor.valueRef.value)
    if (currValue !== oldValue) {
      accessor.setValue(currValue)
      callEmit(props.onChange, currValue, oldValue)
    }
  }

  const changeSelected = (value: any) => {
    const compareFn = props.compareWith ?? props.compareFn
    const { multiple, multipleLimit } = props
    const currValue = selectedValue.value
    const targetIndex = currValue.findIndex(item => compareFn(item, value))
    const isSelected = targetIndex > -1
    if (!multiple) {
      !isSelected && setValue([value])
    } else {
      if (isSelected) {
        setValue(currValue.filter((_, index) => targetIndex !== index))
      } else {
        if (currValue.length < multipleLimit) {
          setValue([...currValue, value])
        } else {
          setValue([...currValue.slice(-multipleLimit + 1), value])
        }
      }
    }
  }

  const handleItemRemove = (value: any) => {
    const compareFn = props.compareWith ?? props.compareFn
    setValue(selectedValue.value.filter(item => !compareFn(value, item)))
  }

  const handleClear = (evt: MouseEvent) => {
    evt.stopPropagation()
    setValue([])
    callEmit(props.onClear, evt)
  }

  return {
    selectedValue,
    selectedOptions,
    changeSelected,
    handleItemRemove,
    handleClear,
  }
}
