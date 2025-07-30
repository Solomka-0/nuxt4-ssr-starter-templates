<template>
  <div class="layout layout--dashboard min-h-screen bg-gray-50 flex flex-col">
    <!-- AppHeader -->
    <AppHeader />

    <div class="layout__body">
      <!-- Sidebar -->
      <aside class="layout__sidebar">
        <SidebarNavigation />
      </aside>

      <!-- Main Content -->
      <main class="layout__main">
        <NuxtPage />
      </main>

      <!-- Activity Feed (Right Column) -->
      <aside class="layout__activity">
        <ActivityFeed />
      </aside>
    </div>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import AppHeader from '~/widgets/AppHeader/AppHeader.vue'
import SidebarNavigation from '~/widgets/SidebarNavigation/SidebarNavigation.vue'
import ActivityFeed from '~/widgets/ActivityFeed/ActivityFeed.vue'
import AppFooter from '~/widgets/AppFooter/AppFooter.vue'
</script>
