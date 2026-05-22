import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  if (compact) {
    return (
      <Image
        src="/brand/hgptot-logo-nav.png"
        alt="HGPTOT Physical Therapy and Occupational Therapy logo"
        width={1220}
        height={540}
        priority
        className="h-14 w-48 object-contain mix-blend-multiply sm:h-16 sm:w-56 lg:w-64"
      />
    );
  }

  return (
    <div className="flex items-center">
      <Image
        src="/brand/hgptot-logo-mark.png"
        alt="HGPTOT logo mark"
        width={120}
        height={120}
        priority
        className="h-28 w-28 object-contain"
      />
    </div>
  );
}

type BrandWordmarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandWordmark({ className = "", priority = false }: BrandWordmarkProps) {
  return (
    <Image
      src="/brand/hgptot-logo-full.png"
      alt="HGPTOT full logo"
      width={1537}
      height={1023}
      priority={priority}
      className={`h-auto w-full object-contain mix-blend-multiply ${className}`}
    />
  );
}

export function BrandMark() {
  return (
    <Image
      src="/brand/hgptot-logo-mark.png"
      alt="HGPTOT logo mark"
      width={1536}
      height={1024}
      className="h-auto w-full object-contain"
    />
  );
}

type BrandLockupProps = {
  dark?: boolean;
  centered?: boolean;
};

export function BrandLockup({ dark = false, centered = false }: BrandLockupProps) {
  return (
    <div className={`${centered ? "text-center" : ""}`}>
      <div className={`${centered ? "mx-auto" : ""} w-full max-w-[12rem]`}>
        <BrandMark />
      </div>
      <div className={`mt-5 ${centered ? "mx-auto max-w-2xl" : ""}`}>
        <h2
          className={`font-serif text-4xl tracking-[0.08em] sm:text-5xl ${
            dark ? "text-white" : "text-charcoal"
          }`}
        >
          HGPTOT
        </h2>
        <p
          className={`mt-3 text-sm uppercase tracking-[0.32em] sm:text-base ${
            dark ? "text-white/70" : "text-teal/80"
          }`}
        >
          Physical Therapy • Occupational Therapy
        </p>
        <p className={`mt-5 font-serif text-2xl sm:text-3xl ${dark ? "text-gold" : "text-charcoal/85"}`}>
          Where Recovery Feels Personal.
        </p>
      </div>
    </div>
  );
}
