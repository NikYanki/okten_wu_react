import axios from "axios";

import {baseURL} from "../configs";

export const AxiosService = axios.create({baseURL});