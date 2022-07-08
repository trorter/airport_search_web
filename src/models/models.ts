export interface IAirport {
  id: number
  name: string
  ident: string
  local_code: string
  region: string
  type: string
  country: string
}

export interface ServerResponse<T> {
  counter: number
  next: number
  previous: number
  results: Array<T>
}