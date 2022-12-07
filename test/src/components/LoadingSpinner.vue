<template>
  <div class="container">
    <div class="spinner"><i class="fas fa-spinner fa-10x"></i></div>
  </div>

</template>

<script>
</script>

<style scoped>

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  color: #FFFFFF;
}

.spinner {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>