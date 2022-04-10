import {config} from '../../configs'

export  const ComentsServise ={
    getAllComents: ()=>fetch(config.apiURL+'comments').then(value => value.json())
}