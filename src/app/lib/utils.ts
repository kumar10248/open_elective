export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Calculate total session time - 2 minutes per question
export function calculateSessionTime(questionCount: number): number {
  return questionCount * 60; // 120 seconds (2 minutes) per question
}

// Helper function to validate image file paths
export function validateImagePath(imagePath: string): boolean {
  if (!imagePath) return false;
  
  // Check if path starts with /images/
  if (!imagePath.startsWith('/images/')) return false;
  
  // Check for supported file extensions
  const supportedExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];
  const hasValidExtension = supportedExtensions.some(ext => 
    imagePath.toLowerCase().endsWith(ext)
  );
  
  return hasValidExtension;
}

// Helper function to get image display name from path
export function getImageDisplayName(imagePath: string): string {
  if (!imagePath) return '';
  
  const filename = imagePath.split('/').pop() || '';
  const nameWithoutExtension = filename.split('.').slice(0, -1).join('.');
  
  // Convert kebab-case to readable format
  return nameWithoutExtension
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}