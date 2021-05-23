<template>
  <div>
    <div class="flex justify-between text-gray-700 pt-4 px-5">
      <h1 class="text-lg font-bold">MEMO</h1>
      <div class="search">
        <div class="flex items-center bg-gray-200 rounded-sm">
          <div class="pl-2">
            <svg
              class="fill-current text-gray-500 w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                class="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </div>
          <input
            class="w-full rounded-sm bg-gray-200 text-gray-600 leading-tight focus:outline-none py-2 px-2 text-xs"
            id="search"
            type="text"
          />
        </div>
      </div>
    </div>
      <!-- comment form -->
      <div class="flex items-center justify-center w-full pt-4 px-5">
        <form class="w-full rounded-md bg-white border-2 border-gray-300 overflow-hidden">
          <div class="flex flex-col">
            <div class="w-full">
              <input class="resize-none w-full font-medium text-sm placeholder-gray-400 focus:outline-none p-4">
            </div>
            <div class="w-full flex items-start justify-end">
              <button class="block text-xs text-center text-white bg-blue-500 py-1.5 px-3 rounded-sm mr-2 mb-2 focus:outline-none">
                记录
              </button>
            </div>
          </div>
        </form>
      </div>
    <div class="w-full">
        <div class="flex justify-center pt-4 px-5">
            <div class="w-full">
                <div class="bg-white shadow-sm rounded px-3 py-2 mb-4">
                    <div class="block text-gray-700 text-lg font-semibold py-2 px-2">
                        2021-05-24
                    </div>
                    <!-- <div class="flex items-center bg-gray-200 rounded-md">
                        <div class="pl-2">
                            <svg class="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path class="heroicon-ui"
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                            </svg>
                        </div>
                        <input
                            class="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                            id="search" type="text" placeholder="Search teams or members">
                    </div> -->
                    <div class="py-3 text-sm">
                        <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span class="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                            <div class="flex-grow font-medium px-2">起床</div>
                            <div class="text-sm font-normal text-gray-500 tracking-wide">03:39:54</div>
                        </div>
                        <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div class="flex-grow font-medium px-2">来学校健身房锻炼了40多分钟</div>
                            <div class="text-sm font-normal text-gray-500 tracking-wide">18:22:41</div>
                        </div>
                    </div>
                    <!-- <div class="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-md">
                        <button class="hover:text-gray-600 text-gray-500 font-bold py-2 px-4">
                            删除
                        </button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            编辑
                        </button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style>
</style>
