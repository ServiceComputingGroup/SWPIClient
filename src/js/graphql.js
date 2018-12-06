import gql from 'graphql-tag'

export const REGISTER_MUTATION = gql `
    mutation register($username: String!,$email: String!,$phone: String!,$password: String!) {
        register(
            username: $username,
            email: $email,
            password: $password,
			phone: $phone
        ) 
    }
`
export const MODIFYUSER_MUTATION = gql `
    mutation modifyuser($username: String!,$email: String!,$phone: String!,$password: String!) {
        modifyuser(
            username: $username,
            email: $email,
            password: $password,
			phone: $phone
        ) 
    }
`
export const LOGIN_MUTATION = gql `
    mutation login($username: String!,$password: String!) {
        login(
            username: $username,
            password: $password
        ) 
    }
`
export const LOGOUT_MUTATION = gql `
    mutation logout($username: String!) {
        logout(
            username: $username
        ) 
    }
`
export const JUDGESTATE_QUERY = gql `
    query judgestate($token: String!) {
        judgestate(
            token: $token
        ) 
    }
`
export const QUERYUSER_QUERY = gql `
    query queryuser($username: String!) {
        queryuser(
            username: $username
        ) 
    }
`
export const QUERY_QUERY = gql `
    query query($index: String,$token: String!,$type: String!,$page: String) {
        query(
            token: $token,
			index: $index,
			type: $type,
			page: $page
        ) 
    }
`

