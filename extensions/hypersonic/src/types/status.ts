import { Color, Icon } from '@raycast/api'

export interface Status {
  id: string
  name: string,
  default: boolean,
  color: Color
  icon: Icon
}
