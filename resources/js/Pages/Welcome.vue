<template>
  <Head title="Welkom" />
  <div class="isolate bg-white">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
        <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
        <defs>
          <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  <div class="px-6 pt-6 lg:px-8">
    <nav class="flex items-center justify-between" aria-label="Global">
      <div class="flex lg:flex-1">
        <div class="sidenav flex justify-center items-center text-3xl  text-indigo-500">
        Studym
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
            <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
          </svg>
        </span>
        te
      </div>
      </div>
      <div class="flex lg:gap-x-6 gap-x-3">
        <PrimaryAnchor :href=" route('register')">
          {{ $t('Routes.Register.Register')}}
        </PrimaryAnchor>
        <PrimaryAnchor :href=" route('login')">
          {{ $t('Routes.Login.Login')}}
        </PrimaryAnchor>
      </div>
    </nav>

  </div>
  <main>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            {{ $t("Welcome.FirstPart.Studying")}} <a target="_blank" href="https://studybetter.nl/productief-samen-studeren-met-een-medestudent/" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span> {{ $t("Welcome.FirstPart.ReadMore")}} <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ $t("Welcome.FirstPart.Title")}}</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">{{ $t("Welcome.FirstPart.Description")}}</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <PrimaryAnchor :href=" route('register')" class="w-1/3">
              {{$t('Routes.Register.MakeAcc')}}
            </PrimaryAnchor>
            <a :href="route('login')" class="text-sm font-semibold leading-6 text-gray-900"> {{ $t('Routes.Login.AlreadyAcc') }} <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
          <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </main>
</div>

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600"> {{ $t('Welcome.SecondPart.TitlePart') }}</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> {{ $t('Welcome.SecondPart.Title') }}</p>
      <p class="mt-6 text-lg leading-8 text-gray-600"> {{ $t('Welcome.SecondPart.Description') }}</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
              </svg>
            </div>
            {{ $t('Welcome.SecondPart.Features.Messages.Title') }}
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">{{ $t('Welcome.SecondPart.Features.Messages.Description') }}</dd>
        </div>

        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>

            </div>
            {{ $t('Welcome.SecondPart.Features.People.Title') }}
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">{{ $t('Welcome.SecondPart.Features.People.Description') }}</dd>
        </div>

        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </div>
            {{ $t('Welcome.SecondPart.Features.StudyRooms.Title') }}
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">{{ $t('Welcome.SecondPart.Features.StudyRooms.Description') }}</dd>
        </div>

        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
              </svg>
            </div>
            {{ $t('Welcome.SecondPart.Features.ToDo.Title') }}
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">{{ $t('Welcome.SecondPart.Features.ToDo.Description') }}</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">{{ $t('Welcome.ThirdPart.Users') }}</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ $page.props.users.length }}</dd>
      </div>

      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">{{ $t('Welcome.ThirdPart.StudyRooms') }}</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ $page.props.studyrooms.length }}</dd>
      </div>

      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">{{ $t('Welcome.ThirdPart.Productivity') }}</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">∞</dd>
      </div>
    </dl>
  </div>
</div>

<footer
  class="bg-white text-center ">
  <div class="container p-6 text-black">
    <hr class="mb-5">
    <div class="grid gap-4 lg:grid-cols-1">
      <div class="mb-6 md:mb-0">
        <h5 class="mb-2 font-bold">Arteveldehogeschool</h5>

        <p class="mb-4">
          Deze webapplicatie werkt gemaakt als opdracht voor de bachelorproef van de
          <a class="hover:text-indigo-500" href="https://www.arteveldehogeschool.be/nl/opleidingen/bachelor/grafische-en-digitale-media">
            Arteveldehogeschool opleiding Grafische en Digitale media
          </a>
        </p>
      </div>

    </div>
  </div>

  <!--Copyright section-->
  <div
    class="bg-white p-4 text-center text-black">
    © 2023 Copyright: Andries De Baere

  </div>
</footer>
</template>

<script>
  import { Head } from '@inertiajs/vue3';
  import PrimaryAnchor from '@/Components/Anchors/PrimaryAnchor.vue';

  export default {
    components: {
      Head,
      PrimaryAnchor,
    },
    props: {
      users: Array,
      studyrooms: Array,
    },
  }
</script>
