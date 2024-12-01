import React from 'react'
import { Slot } from 'expo-router'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GLOBAL_CACHE } from '@constants'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: GLOBAL_CACHE,
    },
  },
})

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
})

const Layout = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: asyncStoragePersister,
        maxAge: GLOBAL_CACHE,
      }}
    >
      <Slot />
    </PersistQueryClientProvider>
  )
}

export default Layout
