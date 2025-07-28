<template>
  <div class="layout layout--dashboard min-h-screen bg-gray-50 flex flex-col">
    <!-- AppHeader -->

    <AppHeader />

    <div class="layout__body flex flex-1">
      <!-- Sidebar -->
      <aside class="layout__sidebar">
        <SidebarNavigation />
      </aside>

      <!-- Main Content -->
      <main class="layout__main flex-1 px-8 py-6">
        <NuxtPage />
      </main>

      <!-- Activity Feed (Right Column) -->
      <aside class="layout__activity">
        <!--        <ActivityFeed />-->
      </aside>
    </div>

    <!-- Footer -->
    <footer class="layout__footer">
      <!--      <Footer />-->
    </footer>
  </div>
</template>
<script setup lang="ts">
import AppHeader from '~/widgets/header/AppHeader.vue'
import SidebarNavigation from '~/widgets/sidebar-navigation/SidebarNavigation.vue'
</script>
