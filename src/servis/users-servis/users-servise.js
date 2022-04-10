import {config} from '../../configs';

export const UsersServise = {
    getAllUsers: ()=>fetch(config.apiURL+'users').then(value => value.json())
}