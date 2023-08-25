export const titles = ["Mr", "Mrs", "Miss"];
export const titleOptions = titles.map((title, key) => (
    <option value={title} key={key}>{title}</option>
));

export const bldGroups = ["A+", "A-", "B-", "B+", "AB+", "AB-", "O+", "O-"]
export const bldGroup = bldGroups.map((bg, key) => (
    <option value={bg} key={key}> {bg} </option>
));

export const maritalStatus = ["Single", "Married", "Divourced"]
export const maritalStatusOptions = maritalStatus.map((ms, key) => (
    <option value={ms} key={key}> {ms} </option>
));

export const genders = ["Male", "Female", "Others"]
export const genderOptions = genders.map((gender, key) => (
    <option value={gender} key={key}> {gender} </option>
));

// export const countries1 = (data) => {
//     return (
//         <option value={data.id} key={data.id}> {data.name} </option>
//     )
// }
// export const countries = Array.from(myMap.entries()).map(([key, value]) => {
//     return  <option value={data.id} key={data.id}> {data.name} </option> //<div key={key}>{value}</div>
//   });
// export const countries_ = [
//     { id: "1", value:"India" },
//     { id:"2", value:"USA" },
//     { id:"3",value:"Switzerland" }]
// export const countriesOptions = countries.map((i, v) => (
//     <option value={i.id} key={v}> {i.value} </option>
// ));

export const states = [
    { id: 1, value: "Karnataka"},
    { id: 2, value: "Kerala"}, 
    {id: 3, value: "Tamilnadu"}]
export const statessOptions = states.map((s, key) => (
    <option value={s.id} key={key}> {s.value} </option>
));

export const cities = [
    { id: 1, value: "Banglore"},
    { id: 2, value: "Thiruvananthapuram"}, 
    {id: 3, value: "Chennai"}]
export const citiesOptions = cities.map((s, key) => (
    <option value={s.id} key={key}> {s.value} </option>
));
