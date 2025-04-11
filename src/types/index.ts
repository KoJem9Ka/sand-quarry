import type { CompressedImage } from '@/utils/img-utils';


export type ApartmentItem = {
  title: string,
  photos: CompressedImage[],
  description: string,
}

export type CaseItem = {
  tasks: string[]
  result: string[]
  deadline: string
}
