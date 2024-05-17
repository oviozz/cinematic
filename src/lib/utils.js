
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getWatchProviders = (providers) => {
  const providerRegions = Object.keys(providers);
  const watchProviders = providerRegions.map(region => {
    const { link, flatrate, buy } = providers[region];
    return {
      region,
      link,
      flatrate: flatrate || [],
      buy: buy || []
    };
  });
  return watchProviders;
};