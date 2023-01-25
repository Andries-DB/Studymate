<template>
  <div class="flex flex-col md:flex-row gap-10 justify-between items-center">
    <div class="space-y-2">
      <h1 class="font-extrabold text-5xl text-blueGray-700">Hallo, {{ $page.props.auth.user.username }}</h1>
      <p>Vandaag is het {{ currentDate() }} </p>
    </div>
    <div class="flex justify-between gap-2 items-center">
      <div class="search-container">
        <form action="/search" method="get">
          <input type="search" class="search expandright" id="searchright" name="q" placeholder="Zoek">
          <label for="searchright" class="button searchbutton p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mglass text-indigo-500">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
          </label>
        </form>
      </div>

      <a href="#" class="bg-indigo-500 py-2 px-4 text-gray-300 rounded-lg
      hover:bg-gray-300 hover:text-indigo-500">Voeg een taak toe</a>
    </div>
  </div>
</template>

<script>
 export default {
  methods: {
    currentDate() {
      const currentDate = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return currentDate.toLocaleDateString('nl', options);
    }
  }
 }
</script>

<style scoped>
  .button {
    background-color: rgb(229,231,235);
    display: flex;
    flex-direction: row;
    cursor: pointer;
    border-radius: .5rem;
  }

.search-container {
	position: relative;
	margin: 4px 2px;
	height: 40px;
	width: 40px;
	vertical-align: bottom;
}

.mglass {
	display: inline-block;
	pointer-events: none;
}

.searchbutton {
	position: absolute;
	width: 100%;
	margin: 0;
	padding: .5rem;
}

search:focus + .searchbutton {
	transition-duration: 0.4s;
	-moz-transition-duration: 0.4s;
	-webkit-transition-duration: 0.4s;
	-o-transition-duration: 0.4s;
  outline-style : none;
}

.search {
	position: absolute;
  border-radius: .5rem;
	left: 39px; /* Button width-1px (Not 50px/100% because that will sometimes show a 1px line between the search box and button) */
	background-color: rgb(229,231,235);
	outline-style: none;
  border: none;
	padding: 0;
	width: 0;
	height: 100%;
	z-index: -10;
	transition-duration: 0.4s;
	-moz-transition-duration: 0.4s;
	-webkit-transition-duration: 0.4s;
	-o-transition-duration: 0.4s;
}


.search:focus {
	width: 363px; /* Bar width+1px */
	padding: 0 16px 0 0;
  outline-style: none;
}

.expandright {
	left: auto;
	right: 0px; /* Button width-1px */
}

.expandright:focus {
	padding: 0 0 0 16px;
  outline-style:none;
}
</style>
