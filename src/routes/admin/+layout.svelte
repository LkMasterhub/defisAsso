<script lang="ts">
	import LayoutDashboard from 'lucide-svelte/icons/layout-dashboard';
	import HeartHandshake from 'lucide-svelte/icons/heart-handshake';
	import Mail from 'lucide-svelte/icons/mail';
	import LogOut from 'lucide-svelte/icons/log-out';
	import Settings from 'lucide-svelte/icons/settings';
	import Menu from 'lucide-svelte/icons/menu';
	import { page } from '$app/state';
	
	const { children } = $props();
	
	const navItems = [
		{ name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
		{ name: 'Actions', href: '/admin/actions', icon: HeartHandshake },
		{ name: 'Messages', href: '/admin/messages', icon: Mail },
		{ name: 'Paramètres', href: '/admin/settings', icon: Settings },
	];
</script>

<div class="flex min-h-screen bg-surface-primary font-sans">
	<!-- Sidebar -->
	<aside class="fixed inset-y-0 left-0 w-64 flex-col bg-surface-inverse text-foreground-inverse hidden md:flex">
		<div class="p-8">
			<span class="text-xl font-bold tracking-tight">DÉFIS Admin</span>
		</div>
		
		<nav class="flex-1 px-4 space-y-2 mt-4">
			{#each navItems as item}
				{@const isActive = page.url.pathname === item.href}
				<a
					href={item.href}
					class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all
					{isActive ? 'bg-accent-primary text-foreground-inverse shadow-lg shadow-accent-primary/20' : 'text-foreground-inverse/60 hover:bg-white/5 hover:text-foreground-inverse'}"
				>
					<item.icon size={20} />
					<span class="font-medium">{item.name}</span>
				</a>
			{/each}
		</nav>
		
		<div class="p-4 border-t border-white/10">
			<button class="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-foreground-inverse/60 hover:bg-red-500/10 hover:text-red-400 transition-all">
				<LogOut size={20} />
				<span class="font-medium">Déconnexion</span>
			</button>
		</div>
	</aside>

	<!-- Main Content -->
	<div class="flex-1 md:ml-64 flex flex-col min-h-screen">
		<header class="h-20 bg-white/50 backdrop-blur-md flex items-center justify-between px-8 border-b border-surface-secondary/20">
			<button class="md:hidden text-foreground-primary">
				<Menu size={24} />
			</button>
			
			<div class="flex items-center gap-4 ml-auto">
				<div class="flex flex-col items-end">
					<span class="text-sm font-bold text-foreground-primary">Frédéric Santa Maria</span>
					<span class="text-xs text-foreground-muted">Président</span>
				</div>
				<div class="w-10 h-10 rounded-full bg-accent-primary flex items-center justify-center text-foreground-inverse font-bold">
					F
				</div>
			</div>
		</header>
		
		<main class="p-8">
			{@render children()}
		</main>
	</div>
</div>
