import type { Component } from 'svelte';
import HeartHandshake from 'lucide-svelte/icons/heart-handshake';
import Palette from 'lucide-svelte/icons/palette';
import Coffee from 'lucide-svelte/icons/coffee';
import Footprints from 'lucide-svelte/icons/footprints';
import Music from 'lucide-svelte/icons/music';
import Mic from 'lucide-svelte/icons/mic';
import Users from 'lucide-svelte/icons/users';
import Heart from 'lucide-svelte/icons/heart';
import BookOpen from 'lucide-svelte/icons/book-open';
import Sparkles from 'lucide-svelte/icons/sparkles';
import Dumbbell from 'lucide-svelte/icons/dumbbell';
import Hand from 'lucide-svelte/icons/hand';
import Sun from 'lucide-svelte/icons/sun';

export const ACTION_ICONS: Record<string, Component> = {
	'heart-handshake': HeartHandshake,
	palette: Palette,
	coffee: Coffee,
	footprints: Footprints,
	music: Music,
	mic: Mic,
	users: Users,
	heart: Heart,
	'book-open': BookOpen,
	sparkles: Sparkles,
	dumbbell: Dumbbell,
	hand: Hand,
	sun: Sun
};

export const ACTION_ICON_NAMES = Object.keys(ACTION_ICONS);

export function resolveActionIcon(name: string | null | undefined): Component {
	if (name && ACTION_ICONS[name]) return ACTION_ICONS[name];
	return Heart;
}
