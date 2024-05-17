export const sanitizeQuery = (searchParams: { search?: string | undefined } | undefined) => {
    let result = ''
    if (searchParams && searchParams.search) {
        result = searchParams.search.trim()
        result = result.replace(/[$]/g, '')
    }
    return result
}
