import { writable } from 'svelte/store'

import Root from '../routes/Root.svelte'
import Download from '../routes/Download.svelte'
import Server from '../routes/Server.svelte'

export const route = writable("/download");