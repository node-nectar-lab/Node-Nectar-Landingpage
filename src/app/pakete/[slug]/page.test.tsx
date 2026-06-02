import { describe, it, expect } from 'vitest';
import { getSlugs } from '@/lib/pakete-data';

describe('pakete/[slug] route', () => {
  it('getSlugs returns exactly the 2 slugged packages', () => {
    const slugs = getSlugs();
    expect(slugs).toContain('digitale-rezeption');
    expect(slugs).toContain('workflow-automation');
    expect(slugs).toHaveLength(2);
  });
});
