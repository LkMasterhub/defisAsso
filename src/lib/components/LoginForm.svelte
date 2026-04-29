<script lang="ts">
	import { Lock, Mail, ArrowRight } from 'lucide-svelte';
	
	interface Props {
		title: string;
		subtitle: string;
		onLogin?: (email: string) => void;
	}

	let { title, subtitle, onLogin }: Props = $props();
	let email = $state("");
	let password = $state("");

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (onLogin) onLogin(email);
	}
</script>

<div class="flex w-full max-w-md flex-col gap-8 rounded-3xl bg-surface-secondary p-8 shadow-xl md:p-12">
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold text-foreground-primary">{title}</h1>
		<p class="text-base text-foreground-secondary">{subtitle}</p>
	</div>

	<form onsubmit={handleSubmit} class="flex flex-col gap-6">
		<div class="flex flex-col gap-2">
			<label for="email" class="text-sm font-medium text-foreground-secondary ml-1">Email</label>
			<div class="relative flex items-center">
				<Mail class="absolute left-4 text-foreground-muted" size={18} />
				<input
					id="email"
					type="email"
					bind:value={email}
					placeholder="votre@email.com"
					class="w-full rounded-2xl border-none bg-surface-primary p-4 pl-12 text-foreground-primary ring-2 ring-transparent focus:ring-accent-primary transition-all outline-none"
					required
				/>
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<label for="password" class="text-sm font-medium text-foreground-secondary ml-1">Mot de passe</label>
			<div class="relative flex items-center">
				<Lock class="absolute left-4 text-foreground-muted" size={18} />
				<input
					id="password"
					type="password"
					bind:value={password}
					placeholder="••••••••"
					class="w-full rounded-2xl border-none bg-surface-primary p-4 pl-12 text-foreground-primary ring-2 ring-transparent focus:ring-accent-primary transition-all outline-none"
					required
				/>
			</div>
		</div>

		<button
			type="submit"
			class="group mt-4 flex items-center justify-center gap-2 rounded-full bg-surface-inverse p-4 text-base font-semibold text-foreground-inverse transition-all hover:opacity-90 active:scale-95"
		>
			Se connecter
			<ArrowRight size={18} class="transition-transform group-hover:translate-x-1" />
		</button>
	</form>

	<div class="text-center">
		<a href="#forgot" class="text-sm text-foreground-muted hover:text-accent-primary transition-colors">
			Mot de passe oublié ?
		</a>
	</div>
</div>
