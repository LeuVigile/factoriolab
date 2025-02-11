import { SelectItem } from 'primeng/api';

export enum InserterCapacity {
  Capacity0,
  Capacity2,
  Capacity7,
}

export const inserterCapacityOptions: SelectItem<InserterCapacity>[] = [
  {
    label: 'options.inserterCapacity.capacity0',
    value: InserterCapacity.Capacity0,
  },
  {
    label: 'options.inserterCapacity.capacity2',
    value: InserterCapacity.Capacity2,
  },
  {
    label: 'options.inserterCapacity.capacity7',
    value: InserterCapacity.Capacity7,
  },
];
