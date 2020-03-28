function averageGeolocation(coords) {
    if (coords.length === 1) {
        return coords[0];
    }

    let x = 0.0;
    let y = 0.0;
    let z = 0.0;

    for (let coord of coords) {
        let latitude = coord.latitude * Math.PI / 180;
        let longitude = coord.longitude * Math.PI / 180;

        x += Math.cos(latitude) * Math.cos(longitude);
        y += Math.cos(latitude) * Math.sin(longitude);
        z += Math.sin(latitude);
    }

    let total = coords.length;

    x = x / total;
    y = y / total;
    z = z / total;

    let centralLongitude = Math.atan2(y, x);
    let centralSquareRoot = Math.sqrt(x * x + y * y);
    let centralLatitude = Math.atan2(z, centralSquareRoot);

    return {
        latitude: +(centralLatitude * 180 / Math.PI).toFixed(4),
        longitude: +(centralLongitude * 180 / Math.PI).toFixed(4)
    };
}

function findCenterCity(cities) {
    center = averageGeolocation(cities);

    let minD = 1000;
    for (let c of cities) {
        let d = Math.pow(c.latitude - center.latitude, 2) + Math.pow(c.longitude - center.longitude, 2);
        if (d < minD) {
            minD = d;
            center.town = c.town;
        }
    }

    return center;
}

module.exports = function mergeRows(cities) {
    if (cities.length == 1)
        return cities[0];

    let res = findCenterCity(cities);
    res.country_code = cities[0].country_code;
    res.postal_code = cities[0].postal_code;
    res.province = cities[0].province;

    return res;
}