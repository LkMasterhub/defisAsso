<script lang="ts">
    let { data } = $props();
</script>
<div class="p-8">
    <h1 class="text-2xl font-bold">Initialisation Admin</h1>
    <p class="mt-4 p-4 bg-surface-secondary rounded-xl">{data.message}</p>
    <a href="/login" class="mt-4 inline-block text-accent-primary underline">Aller à la page de connexion</a>
</div>
