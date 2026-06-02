import { describe, it, expect } from 'vitest';
import { pakete, getPaketBySlug, getSlugs } from './pakete-data';

describe('pakete-data', () => {
  it('exports an array of 4 packages', () => {
    expect(pakete).toHaveLength(4);
  });

  it('getSlugs returns only packages with a slug', () => {
    const slugs = getSlugs();
    expect(slugs).toEqual(['digitale-rezeption', 'workflow-automation']);
  });

  it('getPaketBySlug returns the correct package', () => {
    const p = getPaketBySlug('digitale-rezeption');
    expect(p?.name).toBe('Digitale Rezeption');
  });

  it('getPaketBySlug returns undefined for unknown slug', () => {
    expect(getPaketBySlug('unbekannt')).toBeUndefined();
  });

  it('getPaketBySlug returns undefined for null-slug packages', () => {
    expect(getPaketBySlug('website-launch')).toBeUndefined();
  });

  it('slugged packages have all required detail fields', () => {
    for (const slug of getSlugs()) {
      const p = getPaketBySlug(slug)!;
      expect(p.longDesc).toBeTruthy();
      expect(p.processSteps).toHaveLength(4);
      expect(p.forWhom!.length).toBeGreaterThanOrEqual(4);
      expect(p.szenario?.title).toBeTruthy();
      expect(p.faq!.length).toBeGreaterThanOrEqual(5);
    }
  });
});
