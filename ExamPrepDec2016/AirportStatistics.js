function air(arr) {
    let inplanes = new Map()
    let outplanes = new Map()
    let towns=new Map()
    let townsFlights=new Map()
    for (let i = 0; i < arr.length; i++) {
        let [id, town, passengerount,action]=arr[i].split(" ")
        if (!inplanes.has(id)&&action==='land') {
            inplanes.set(id,new Map().set(town,passengerount))
            if (!towns.has(town)) {
                towns.set(town, new Map())
                townsFlights.set(town,new Array())


            }
            if (!townsFlights.get(town).hasOwnProperty(id)){
                townsFlights.get(town).push(id)
            }
            if (!towns.get(town).has(action)){
                towns.get(town).set(action,Number(passengerount))
                townsFlights.get(town).hasOwnProperty(id)
            }
            else{
                towns.get(town).set(action,towns.get(town).get(action)+Number(passengerount))
            }
        }
        else if(!inplanes.has(id)&&action==='depart') {
        }
        else if(inplanes.has(id)&&action==='land') {
        }
        else if(inplanes.has(id)&&action==='depart') {
            inplanes.delete(id)
            outplanes.set(id,new Map().set(town,passengerount))
            if (!towns.has(town)) {
                towns.set(town, new Map())
                townsFlights.set(town,new Array())

            }
            if (!townsFlights.get(town).hasOwnProperty(id)){
                townsFlights.get(town).push(id)
            }
            if (!towns.get(town).has(action)){
                towns.get(town).set(action,Number(passengerount))
            }
            else{
                towns.get(town).set(action,towns.get(town).get(action)+Number(passengerount))
            }
        }
    }

    console.log('Planes left:');
    Array.from(inplanes.keys()).sort((a,b)=>a.localeCompare(b)).forEach(k=>console.log(`- ${k}`))

    Array.from(towns.keys()).sort((a,b)=>{
        towns.get(a).get('land')===undefined? towns.get(a).set('land',0):towns.get(a).get('land')
        towns.get(b).get('land')===undefined? towns.get(b).set('land',0):towns.get(b).get('land')
        let res=towns.get(b).get('land')-towns.get(a).get('land')
        if(res===0){
            res=a.localeCompare(b)
        }
        return res
    }).forEach(k=>{
        console.log(k)
        towns.get(k).get('land')===undefined? console.log('Arrivals: '+0):console.log("Arrivals: "+towns.get(k).get('land'))
        // console.log("Arrivals: "+towns.get(k).get('land'));
        towns.get(k).get('depart')===undefined? console.log('Departures: '+0):console.log("Departures: "+towns.get(k).get('depart'))
        console.log('Planes:');
        let planes=new Set()
        townsFlights.get(k).sort((a,b)=>a.localeCompare(b)).forEach(p=>{
            if (!planes.has(p)){
                console.log(`-- ${p}`)
            }

            planes.add(p)
        })
    })
}
// air([ "Boeing474 Madrid 300 land", "AirForceOne WashingtonDC 178 land",
//     "Airbus London 265 depart", "ATR72 WashingtonDC 272 land", "ATR72 Madrid 135 depart"
// ])
// air([ "Airbus Paris 356 land",
//     "Airbus London 321 land", "Airbus Paris 213 depart", "Airbus Ljubljana 250 land"
// ])

// air(['Airbus London 100 land',
// 'Airbus Paris 200 depart',
// 'Airbus Madrid 130 depart',
// 'Airbus Lisbon 403 depart',
// 'Airbus Moscow 505 depart',
// 'Airbus Sofia 16 depart'])

// air(['RTA72 London -10 land',
//     'RTA#72 Brussels -110 depart',
// 'RTA7!2 Warshaw 350 land',
// 'RTA72 Riga -201 depart',
// 'rta72 riga -13 land',
// 'rta Riga -200 depart'])

air(['RTA72 London 140 land',
    'RTA72 Brussels 240 depart',
    'RTA72 Sofia 450 land',
    'RTA72 Lisbon 240 depart',
    'RTA72 Berlin 350 land',
    'RTA72 Otava 201 depart',
    'RTA72 Haga 350 land',
    'RTA72 Otava 201 depart',
    'RTA72 Dortmund 150 land',
    'RTA72 Montana 243 depart',
    'RTA72 Monreal 350 land',
    'RTA72 NewYork 201 depart',
    'RTA72 Pekin 350 land',
    'RTA72 Tokyo 201 depart',
    'RTA72 Warshaw 350 land',
    'RTA72 Riga 201 depart'])