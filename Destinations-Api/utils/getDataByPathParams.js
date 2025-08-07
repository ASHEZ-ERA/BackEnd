export default function getDataByPathParams(data, locationType, locationName){
    return data.filter(d => {
        return d[locationType].tolowerCase() === d.locationName.tolowerCase()
    })
}