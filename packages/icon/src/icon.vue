<template>
    <i :class="['sulg-icon-'+name]" style="font-size: 1.5em;"></i>
</template>
 
<script>
    export default {
      name: 'SuIcon',
      props: {
        name: String
      }
    }
</script>