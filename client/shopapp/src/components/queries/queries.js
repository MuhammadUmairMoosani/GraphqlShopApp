import { gql } from 'apollo-boost';

const getJeansQuerry = gql`
{
    jeans{
        name
        color
        type
        id
    }
}
`

const getTshirtQuerry = gql`
{
    tshirt{
        name
        color
        type
        id
    }
}
` 
const getSunglassesQuerry = gql`
{
    sunglasses{
        name
        color
        type
        id
    }
}
`
const addJeansMutation = gql`
mutation($name:String!,$type:String!,$color:String!){
    addJeans(name:$name,type:$type,color:$color){
        name
        type
        color
    }
}
`
const addTshirtMutation = gql`
mutation($name:String!,$type:String!,$color:String!){
    addTshirt(name:$name,type:$type,color:$color){
        name
        type
        color
    }
}
`
const addGlassesMutation = gql`
mutation($name:String!,$type:String!,$color:String!){
    addGlasses(name:$name,type:$type,color:$color){
        name
        type
        color
    }
}
`
const deleteJeansMutation = gql`
mutation($id:String!){
    deleteJeans(id:$id){
        id
    }
}
` 
const deleteTshirtMutation = gql`
mutation($id:String!){
    deleteTshirt(id:$id){
        id
    }
}
` 
const deleteSunglassesMutation = gql`
mutation($id:String!){
    deleteSunglasses(id:$id){
        id
    }
}
` 
const updateJeansMutation = gql`
mutation($name:String!,$type:String!,$color:String!,$id:String!){
    updateJeans(name:$name,type:$type,color:$color,id:$id){
        name
        type
        color
        id
    }
}
`
const updateTshirtMutation = gql`
mutation($name:String!,$type:String!,$color:String!,$id:String!){
    updateTshirt(name:$name,type:$type,color:$color,id:$id){
        name
        type
        color
        id
    }
}
`
const updateGlassesMutation = gql`
mutation($name:String!,$type:String!,$color:String!,$id:String!){
    updateSunglasses(name:$name,type:$type,color:$color,id:$id){
        name
        type
        color
        id
    }
}
`


export {
    getJeansQuerry,
    getTshirtQuerry,
    getSunglassesQuerry,
    addJeansMutation,
    addTshirtMutation,
    addGlassesMutation,
    deleteJeansMutation,
    deleteTshirtMutation,
    deleteSunglassesMutation,
    updateJeansMutation,
    updateTshirtMutation,
    updateGlassesMutation
}