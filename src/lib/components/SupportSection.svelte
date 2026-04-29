<script lang="ts">
	import { HELLOASSO } from '$lib/config.js';
	import HandHeart from 'lucide-svelte/icons/hand-heart';
	import Footprints from 'lucide-svelte/icons/footprints';
	import Users from 'lucide-svelte/icons/users';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import Mail from 'lucide-svelte/icons/mail';
</script>

<section id="soutenir" class="flex w-full flex-col gap-12 px-6 py-20 md:px-12">
	<div class="flex flex-col gap-4">
		<div class="inline-flex w-fit items-center gap-2 rounded-full bg-accent-primary/10 px-4 py-2 text-accent-primary">
			<HandHeart size={16} />
			<span class="text-sm font-semibold uppercase tracking-wider">Soutenir DÉFIS</span>
		</div>
		<h2 class="text-3xl font-bold text-foreground-primary md:text-4xl">
			Chaque geste compte, chaque don agit.
		</h2>
		<p class="text-lg text-foreground-secondary">
			Des repas distribués aux ateliers financés, votre aide devient terrain.
		</p>
	</div>

	<div class="flex flex-col gap-6 lg:flex-row">
		<div class="flex flex-1 flex-col gap-6 rounded-2xl bg-surface-inverse p-8 text-foreground-inverse">
			<div class="flex items-center gap-3">
				<div class="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-primary">
					<HandHeart size={20} />
				</div>
				<span class="font-mono text-xs font-semibold uppercase tracking-wider opacity-60">
					Don général
				</span>
			</div>
			<h3 class="text-2xl font-bold leading-tight">Soutenez l'ensemble de nos actions.</h3>
			<p class="text-base leading-relaxed opacity-80">
				Financer des repas, des activités éducatives et sportives, et accompagner des personnes en situation de précarité.
			</p>
			<a
				href={HELLOASSO.donGeneral}
				target="_blank"
				rel="noopener noreferrer"
				class="mt-auto flex items-center justify-between gap-3 rounded-xl bg-accent-primary px-5 py-4 text-base font-semibold text-foreground-inverse transition-all hover:brightness-110"
			>
				Donner sur HelloAsso
				<ArrowRight size={16} />
			</a>
		</div>

		<div class="flex flex-1 flex-col gap-6 rounded-2xl bg-accent-primary p-8 text-foreground-inverse">
			<div class="flex items-center gap-3">
				<div class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-inverse">
					<Footprints size={20} />
				</div>
				<span class="font-mono text-xs font-semibold uppercase tracking-wider opacity-70">
					Maraudes solidaires
				</span>
			</div>
			<h3 class="text-2xl font-bold leading-tight">Repas, écoute, liens humains.</h3>
			<p class="text-base leading-relaxed opacity-90">
				Chaque maraude permet d'aller à la rencontre des personnes en situation de précarité dans les rues de Clermont-Ferrand.
			</p>
			<a
				href={HELLOASSO.donMaraudes}
				target="_blank"
				rel="noopener noreferrer"
				class="mt-auto flex items-center justify-between gap-3 rounded-xl bg-surface-inverse px-5 py-4 text-base font-semibold text-foreground-inverse transition-all hover:brightness-110"
			>
				Soutenir les maraudes
				<ArrowRight size={16} />
			</a>
		</div>
	</div>

	<div class="flex flex-col gap-6 rounded-2xl bg-surface-secondary p-8 text-foreground-primary lg:flex-row lg:items-center lg:justify-between">
		<div class="flex flex-col gap-3 lg:max-w-2xl">
			<div class="flex items-center gap-3">
				<div class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-inverse text-foreground-inverse">
					<Users size={20} />
				</div>
				<span class="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-muted">
					Devenir bénévole
				</span>
			</div>
			<h3 class="text-2xl font-bold leading-tight">Donnez du temps, recevez du sens.</h3>
			<p class="text-base leading-relaxed text-foreground-secondary">
				Rejoignez l'équipe pour les maraudes, l'animation d'ateliers, ou l'organisation d'événements.
			</p>
		</div>
		<a
			href="#contact"
			class="flex w-fit items-center gap-3 rounded-xl bg-surface-inverse px-6 py-4 text-base font-semibold text-foreground-inverse transition-all hover:brightness-110"
		>
			<Mail size={16} />
			Nous contacter
		</a>
	</div>
</section>
