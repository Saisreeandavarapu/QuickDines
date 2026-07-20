import React from 'react';
import * as Icons from 'lucide-react';

/**
 * Reusable Icon component that dynamically maps string names to Lucide icons.
 * Example usage: <Icon name="Utensils" className="w-6 h-6 text-primary" />
 */
export const Icon = ({ name, ...props }) => {
  const LucideIcon = Icons[name];
  if (!LucideIcon) {
    // Return a fallback search icon if the specified icon does not exist
    const Fallback = Icons.HelpCircle;
    return <Fallback {...props} />;
  }
  return <LucideIcon {...props} />;
};

export default Icon;
