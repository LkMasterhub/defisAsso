<script lang="ts">
	import LoginForm from '$lib/components/LoginForm.svelte';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Connexion | DÉFIS Administration</title>
</svelte:head>

<div class="flex min-h-[80vh] w-full items-center justify-center p-6">
	<LoginForm 
		title="Administration" 
		subtitle="Accédez à l'espace de gestion DÉFIS"
		onLogin={() => goto('/admin')}
	/>
</div>
