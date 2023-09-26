interface params {
  album?: string,
  artist?: string,
  track?: string,
  year?: string,
  upc?: string,
  tag?: 'hipster' | 'new',
  isrc?: string,
  genre?: string
}
export const searchQueryStringCreator = (params: params) => {
  let queryString = ''
  Object.entries(params).forEach((param) => {
    queryString = queryString + `%20${param[0]}:${param[1]}%20`
  })
  return queryString
}

// album, artist, track, year, upc, tag:hipster, tag:new, isrc, and genre