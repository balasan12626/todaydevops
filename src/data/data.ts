import { Item, Category } from '../types';
import { Film, Music, Coffee, Book, Camera, Palette, TowerControl as GameController, Trees } from 'lucide-react';

// Categories with icons
export const categories: Category[] = [
  {
    id: 'photography',
    name: 'Photography',
    description: 'Stunning visual imagery and photographic art',
    icon: 'Camera',
  },
  {
    id: 'art',
    name: 'Art',
    description: 'Beautiful artwork and illustrations',
    icon: 'Palette',
  },
  {
    id: 'nature',
    name: 'Nature',
    description: 'The beauty of the natural world',
    icon: 'Trees',
  },
  {
    id: 'film',
    name: 'Film & Video',
    description: 'Cinematic productions and visual media',
    icon: 'Film',
  },
  {
    id: 'books',
    name: 'Books',
    description: 'Literary works and publications',
    icon: 'Book',
  },
  {
    id: 'music',
    name: 'Music',
    description: 'Audio compositions and sound art',
    icon: 'Music',
  },
  {
    id: 'games',
    name: 'Games',
    description: 'Interactive entertainment and gaming',
    icon: 'GameController',
  },
  {
    id: 'food',
    name: 'Food & Drink',
    description: 'Culinary delights and beverages',
    icon: 'Coffee',
  },
];

// Get icon component by name
export const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Camera': return Camera;
    case 'Palette': return Palette;
    case 'Trees': return Trees;
    case 'Film': return Film;
    case 'Book': return Book;
    case 'Music': return Music;
    case 'GameController': return GameController;
    case 'Coffee': return Coffee;
    default: return Camera;
  }
};

// Mock data items
export const items: Item[] = [
  {
    id: '1',
    title: 'Mountain Sunrise',
    description: 'A breathtaking view of the sun rising over mountain peaks, with dramatic rays cutting through the morning mist. This photograph captures the essence of tranquility and the majestic beauty of nature at dawn.',
    imageUrl: 'https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'photography',
    tags: ['mountains', 'sunrise', 'landscape'],
    rating: 4.8,
    date: '2023-09-15',
    featured: true,
  },
  {
    id: '2',
    title: 'Abstract Vibrance',
    description: 'A vivid abstract painting featuring bold geometric shapes and a dynamic color palette. The artist plays with perspective and dimension to create a sense of movement and energy throughout the composition.',
    imageUrl: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'art',
    tags: ['abstract', 'colorful', 'modern'],
    rating: 4.5,
    date: '2023-08-22',
    author: 'Elena Romano',
  },
  {
    id: '3',
    title: 'Coastal Serenity',
    description: 'A peaceful coastal scene with gentle waves lapping at a pristine beach. The photograph captures the harmonious relationship between land and sea, with soft pastel colors creating a serene atmosphere.',
    imageUrl: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'nature',
    tags: ['beach', 'ocean', 'sunset'],
    rating: 4.6,
    date: '2023-10-05',
  },
  {
    id: '4',
    title: 'Urban Nightscape',
    description: 'A cinematic capture of a city skyline at night, with gleaming lights reflecting in the water below. This short film explores the rhythm and energy of urban life after dark, contrasting the stillness of the night with the perpetual motion of the city.',
    imageUrl: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'film',
    tags: ['city', 'night', 'skyline'],
    rating: 4.7,
    date: '2023-07-18',
    featured: true,
  },
  {
    id: '5',
    title: 'Chronicles of Tomorrow',
    description: 'A speculative fiction novel exploring the ethical implications of advanced artificial intelligence in a near-future society. The narrative weaves together multiple character perspectives as humanity grapples with its evolving relationship with technology.',
    imageUrl: 'https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'books',
    tags: ['science fiction', 'novel', 'future'],
    rating: 4.3,
    date: '2023-11-12',
    author: 'Elijah Mercer',
    price: 24.99,
  },
  {
    id: '6',
    title: 'Harmony in Motion',
    description: 'An innovative musical composition that blends traditional orchestral elements with electronic soundscapes. The piece explores the concept of movement through sound, creating a dynamic auditory journey for the listener.',
    imageUrl: 'https://images.pexels.com/photos/4090902/pexels-photo-4090902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'music',
    tags: ['classical', 'electronic', 'composition'],
    rating: 4.9,
    date: '2023-06-30',
    author: 'Sophie Lin',
  },
  {
    id: '7',
    title: 'Echoes of the Ancients',
    description: 'An immersive role-playing game set in a richly detailed fantasy world inspired by ancient civilizations. Players embark on an epic quest to uncover lost knowledge and prevent a looming catastrophe while navigating complex political alliances.',
    imageUrl: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'games',
    tags: ['rpg', 'fantasy', 'adventure'],
    rating: 4.7,
    date: '2023-09-28',
    price: 59.99,
  },
  {
    id: '8',
    title: 'Artisanal Coffee Experience',
    description: 'A meticulously crafted coffee blend featuring single-origin beans from ethical farms across South America. The flavor profile includes notes of dark chocolate, cherry, and caramel with a smooth, balanced finish.',
    imageUrl: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'food',
    tags: ['coffee', 'artisanal', 'gourmet'],
    rating: 4.6,
    date: '2023-10-10',
    price: 18.99,
  },
  {
    id: '9',
    title: 'Desert Mirage',
    description: 'A mesmerizing photograph capturing the otherworldly beauty of desert landscapes at sunset. The image plays with light and shadow to create an almost surreal quality, highlighting the stark geometry and subtle color gradients of the sand dunes.',
    imageUrl: 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'photography',
    tags: ['desert', 'landscape', 'sunset'],
    rating: 4.5,
    date: '2023-05-15',
  },
  {
    id: '10',
    title: 'Whispers of the Forest',
    description: 'A contemplative nature documentary exploring the intricate ecosystems of ancient forests. Through stunning macro photography and thoughtful narration, the film reveals the hidden interconnections between flora and fauna that sustain these vital environments.',
    imageUrl: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'film',
    tags: ['nature', 'documentary', 'forest'],
    rating: 4.8,
    date: '2023-08-04',
    featured: true,
  },
  {
    id: '11',
    title: 'Eternal Perspective',
    description: 'A thought-provoking sculpture that plays with perception and space, inviting viewers to consider multiple perspectives simultaneously. Crafted from sustainable materials, the piece creates different visual experiences as the viewer moves around it.',
    imageUrl: 'https://images.pexels.com/photos/262034/pexels-photo-262034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'art',
    tags: ['sculpture', 'conceptual', 'interactive'],
    rating: 4.4,
    date: '2023-07-22',
    author: 'Marcus Chen',
  },
  {
    id: '12',
    title: 'Coral Symphony',
    description: 'A vibrant underwater photograph showcasing the dazzling diversity of a healthy coral reef ecosystem. The image captures the delicate balance between numerous marine species and highlights the urgent need for conservation efforts.',
    imageUrl: 'https://images.pexels.com/photos/3771085/pexels-photo-3771085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'nature',
    tags: ['ocean', 'coral', 'underwater'],
    rating: 4.9,
    date: '2023-09-03',
    featured: true,
  },
];

// Mock API function to fetch items with filtering and pagination
export const fetchItems = (
  search: string = '',
  category: string = '',
  tags: string[] = [],
  page: number = 1,
  limit: number = 6
): SearchResult => {
  let filteredItems = [...items];
  
  // Filter by search term
  if (search) {
    const searchLower = search.toLowerCase();
    filteredItems = filteredItems.filter(
      item =>
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }
  
  // Filter by category
  if (category) {
    filteredItems = filteredItems.filter(item => item.category === category);
  }
  
  // Filter by tags
  if (tags.length > 0) {
    filteredItems = filteredItems.filter(item =>
      tags.some(tag => item.tags.includes(tag))
    );
  }
  
  // Calculate pagination
  const total = filteredItems.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);
  
  return {
    items: paginatedItems,
    total,
    page,
    limit
  };
};

// Function to get a single item by ID
export const getItemById = (id: string): Item | undefined => {
  return items.find(item => item.id === id);
};

// Function to get related items (same category or shared tags)
export const getRelatedItems = (itemId: string, limit: number = 3): Item[] => {
  const currentItem = getItemById(itemId);
  
  if (!currentItem) return [];
  
  return items
    .filter(item => 
      item.id !== itemId && (
        item.category === currentItem.category ||
        item.tags.some(tag => currentItem.tags.includes(tag))
      )
    )
    .sort(() => Math.random() - 0.5) // Shuffle for variety
    .slice(0, limit);
};

// Get popular tags from all items
export const getPopularTags = (limit: number = 10): string[] => {
  const tagCounts: Record<string, number> = {};
  
  // Count occurrences of each tag
  items.forEach(item => {
    item.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  // Sort by count and return top tags
  return Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
};