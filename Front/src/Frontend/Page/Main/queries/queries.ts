export const GET_MAIN_ITEMS_QUERY = (queryParams) => `
  query {
    mainItems {
      counter
      name
    }
  }
`