<template>
    <ul>
      <Link
      class="p-3 flex justify-start items-center gap-3 cursor-pointer"
      v-for="({text,icon, href}) in items"
      :href="route(href)"
      :class="{
        'font-bold bg-indigo-500 rounded-xl text-stone-50' : getUrl() === text,
      }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5  ">
          <path fill-rule="evenodd" :d="icon" clip-rule="evenodd"/>
        </svg>
        <span>{{ upper(text) }}</span>
      </Link>
    </ul>
  </template>

  <script setup>
  import { Link } from '@inertiajs/vue3';

  const items = [
    {
      text:  'dashboard',
      icon: "M14 17h2.75A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H14v14zM12.5 3h-5v14h5V3zM3.25 3H6v14H3.25A2.25 2.25 0 011 14.75v-9.5A2.25 2.25 0 013.25 3z",
      href: 'dashboard',
    },
    {
      text: 'studeerkamers',
      icon:"M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z",
      href: "studeerkamers"
    },
    {
      text: "berichten",
      icon: "M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z",
      href: "berichten"
    },
    {
      text: "instellingen",
      icon: "M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z",
      href: "instellingen"
    }
  ];

  function getUrl() {
    return window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
  }

  function upper(text) {
    return text.charAt(0).toUpperCase() + text.substring(1);
  }

</script>
