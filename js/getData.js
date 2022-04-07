export const getData = async (id) =>  {
    try {
    const resp = await fetch(`https://swapi.dev/api/people`)

        const data = await resp.json();

        return data.results
    } catch (error) {
       throw new Error(error) 
    }
}