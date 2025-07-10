export default getDataByPathParams = (data, locationType, locationName)  => {
    return data.filter((data) => {
        return data[locationType].toLowerCase() === locationName.toLowerCase()
    })
}