import React from 'react'
import { Slot } from 'expo-router'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CACHE_TIMEOUT } from '@constants'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: CACHE_TIMEOUT,
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
        maxAge: CACHE_TIMEOUT,
      }}
    >
      <Slot />
    </PersistQueryClientProvider>
  )
}

export default Layout
