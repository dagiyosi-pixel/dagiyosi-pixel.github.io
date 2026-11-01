// ==========================================================================
// ARCHITECTURAL SOUND SYSTEM // THE BLUEPRINT UNIVERSE
// Synthesized drafting, caliper clicks & structural assembly audio via Web Audio API
// ==========================================================================

class BlueprintAudio {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.masterGain = null;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.28, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn('Web Audio not supported', e);
    }
  }

  toggle() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.playBlueprintUnfold();
    }
    return this.enabled;
  }

  // 1. Drafting Pencil Scratch on Blueprint Paper
  playPencilScratch() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1800, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.07);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  // 2. Blueprint Paper Roll Unfold
  playBlueprintUnfold() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    
    // High airy hiss
    const bufferSize = this.ctx.sampleRate * 0.25;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2200, now);
    filter.Q.setValueAtTime(2.5, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
  }

  // 3. Precision Caliper / Measurement Snap Click
  playCaliperClick() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now); // A5 note
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.04);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  // 4. Precast Structural Assembly Lock ("CLACK")
  playStructuralClack() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    
    // Deep structural resonance
    const sub = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    sub.type = 'square';
    sub.frequency.setValueAtTime(110, now);
    sub.frequency.exponentialRampToValueAtTime(45, now + 0.18);

    subGain.gain.setValueAtTime(0.2, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    sub.connect(subGain);
    subGain.connect(this.masterGain);

    sub.start(now);
    sub.stop(now + 0.2);

    // High metal pin impact
    const pin = this.ctx.createOscillator();
    const pinGain = this.ctx.createGain();
    pin.type = 'triangle';
    pin.frequency.setValueAtTime(3200, now);
    pin.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
    pinGain.gain.setValueAtTime(0.12, now);
    pinGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    pin.connect(pinGain);
    pinGain.connect(this.masterGain);

    pin.start(now);
    pin.stop(now + 0.06);
  }

  // 5. Awakening Architectural Chord
  playAwakening() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    const freqs = [220, 277.18, 329.63, 440]; // A Major chord

    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.06 / (i + 1), now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 1.8);
    });
  }
}

export const sound = new BlueprintAudio();
