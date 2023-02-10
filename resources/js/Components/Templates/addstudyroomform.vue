<template>
    <form :action="route('addStudyRoom')" method="post" enctype="multipart/form-data">
    <input type="hidden" name="_token" :value="csrf">
    <input type="text" name="name" id="name" placeholder="name">
    <input type="text" name="description" id="description" placeholder="descr">
    <input type="file" name="image" id="image">
    <button type="submit">Submit</button>
  </form>
</template>
