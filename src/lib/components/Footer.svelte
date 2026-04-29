<script lang="ts">
	import { HELLOASSO, ADRESSE, CONTACT, SOCIAL } from '$lib/config.js';
</script>

<footer class="flex w-full flex-col gap-10 bg-surface-inverse px-6 py-12 text-foreground-inverse md:px-12">
	<div class="flex flex-col gap-10 md:flex-row md:justify-between">
		<div class="flex max-w-sm flex-col gap-3">
			<div class="text-2xl font-bold">DÉFIS</div>
			<p class="text-sm leading-relaxed opacity-60">
				Diversité · Éducation · Formation · Insertion · Solidarité.<br />
				{ADRESSE.ville}, Puy-de-Dôme.
			</p>
			<a
				href={SOCIAL.instagram}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram DÉFIS"
				class="flex w-fit items-center gap-2 rounded-full bg-foreground-inverse/10 px-4 py-2 text-xs font-semibold opacity-75 transition-all hover:bg-foreground-inverse/20 hover:opacity-100"
			>
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
					<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
					<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
				</svg>
				@defisasso
			</a>
		</div>

		<div class="flex flex-col gap-10 md:flex-row md:gap-16">
			<nav class="flex flex-col gap-3">
				<span class="font-mono text-xs font-semibold uppercase tracking-wider opacity-40">Navigation</span>
				<a href="#association" class="text-sm opacity-75 hover:opacity-100 transition-opacity">L'Association</a>
				<a href="#actions" class="text-sm opacity-75 hover:opacity-100 transition-opacity">Nos Actions</a>
				<a href="#fondation" class="text-sm opacity-75 hover:opacity-100 transition-opacity">La Fondation</a>
				<a href="#soutenir" class="text-sm opacity-75 hover:opacity-100 transition-opacity">Soutenir</a>
			</nav>

			<nav class="flex flex-col gap-3">
				<span class="font-mono text-xs font-semibold uppercase tracking-wider opacity-40">Agir</span>
				<a href={HELLOASSO.donGeneral} target="_blank" rel="noopener noreferrer" class="text-sm opacity-75 hover:opacity-100 transition-opacity">Faire un don</a>
				<a href={HELLOASSO.donMaraudes} target="_blank" rel="noopener noreferrer" class="text-sm opacity-75 hover:opacity-100 transition-opacity">Soutenir les maraudes</a>
				<a href={HELLOASSO.boutique} target="_blank" rel="noopener noreferrer" class="text-sm opacity-75 hover:opacity-100 transition-opacity">Boutique HelloAsso</a>
				<a href="#contact" class="text-sm opacity-75 hover:opacity-100 transition-opacity">Devenir bénévole</a>
			</nav>

			<div class="flex flex-col gap-3">
				<span class="font-mono text-xs font-semibold uppercase tracking-wider opacity-40">Contact</span>
				<a href="mailto:{CONTACT.email}" class="font-mono text-sm hover:opacity-80">{CONTACT.email}</a>
				<span class="font-mono text-sm opacity-75">{ADRESSE.rue}</span>
				<span class="text-sm opacity-60">{ADRESSE.codePostal} {ADRESSE.ville}</span>
			</div>
		</div>
	</div>

	<div class="h-px w-full bg-foreground-inverse opacity-10"></div>

	<div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
		<span class="font-mono text-xs opacity-45">
			© {new Date().getFullYear()} Association DÉFIS — loi 1901, non lucrative.
		</span>
		<nav class="flex gap-5">
			<a href="#mentions" class="font-mono text-xs opacity-45 hover:opacity-100 transition-opacity">Mentions légales</a>
			<a href="#confidentialite" class="font-mono text-xs opacity-45 hover:opacity-100 transition-opacity">Confidentialité</a>
		</nav>
	</div>
</footer>
