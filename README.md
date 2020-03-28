# geo-locations

Repository to host geo locations files for other targeted countries

@all participant from codevscovid19.org you can make pull request to create files that containe geo locations.

~~The format of the file is this one > https://github.com/ch-covid-19/datasets/blob/master/geocoding.csv~~

## 2020-03-28 Update geocodings.csv

- rename geocodings.csv in AAA_geocodings.csv where AAA is the ISO 3166 Alpha-3 country code ([see country-codes_csv.csv or country-codes_json.json](data/general/country_codes/))
- update header

### New header (example from Mexico):

| country_code | postal_code | town           | region         | latitude | longitude |
| ------------ | ----------- | -------------- | -------------- | -------- | --------- |
| MEX          | 20016       | Aguascalientes | Aguascalientes | 21.8115  | -102.2957 |
| MEX | 99827 | Santa María de la Paz | Zacatecas | 21.4775 | -103.3036 |

Thanks for your help!

## Datasources
- Postal codes can also be found at: https://www.geonames.org/ might not be completely up to date but hosts a lot of info.
- Some good sources can be found at: https://datahub.io/
  - Country codes: https://datahub.io/core/country-codes
  - Language codes: https://datahub.io/core/language-codes
  - Airport codes: https://datahub.io/core/airport-codes

## FAQ
- [In my country multiple cities can have the same postal code?](#in-my-country-multiple-cities-can-have-the-same-postal-code)
- [When we group together multiple cities, which location should we keep?](#when-we-group-together-multiple-cities-which-location-should-we-keep)

### In my country multiple cities can have the same postal code?

Most of the time these cities are relatively small and are grouped together for convenience. Right now information at the postal code level is sufficient for the self-reporting process. Grouping should (if possible) occur to either the biggest or most important city in the region or to an appropriate name.

### When we group together multiple cities, which location should we keep?
Location should be kept to the city selected for the location or can be set to the geometric mean of the locations involved.
