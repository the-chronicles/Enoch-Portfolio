"use client";

import React from "react";
import {
  RiSmartphoneLine,
  RiGlobalLine,
  RiVolumeUpLine,
  RiCheckLine,
  RiLayoutGridLine,
  RiPulseLine,
  RiTruckLine,
  RiShoppingBag3Line,
  RiShieldCheckLine,
  RiBookOpenLine,
  RiRestaurantLine,
  RiAndroidFill,
  RiTerminalBoxLine,
  RiArrowRightUpLine,
  RiEqualizerLine,
} from "react-icons/ri";
import type { ProjectItem } from "@/data/portfolio";

interface ProjectBlueprintProps {
  type: ProjectItem["blueprintType"];
  compact?: boolean;
}

export default function ProjectBlueprint({ type, compact = false }: ProjectBlueprintProps) {
  return (
    <div
      className={`blueprint-surface relative w-full overflow-clip select-none ${
        compact ? "aspect-[16/10]" : "aspect-[16/9]"
      } flex flex-col justify-between p-4 sm:p-5`}
      aria-hidden="true"
    >
      {/* Top Technical Spec Bar */}
      <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-2.5 text-[0.6875rem] font-mono tracking-wider uppercase text-[var(--text-muted)]">
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-1.5 rounded-full bg-[var(--accent)]" />
          {type === "koyo-mobile-web" && "FIG 01 // KOYO AUDIO-LINGUAL ENGINE"}
          {type === "jaraaf-suite" && "FIG 02 // JARAAF DUAL-SURFACE ARCHITECTURE"}
          {type === "duvic-logistics" && "FIG 03 // DUVIC CONSUMER + COURIER DISPATCH"}
          {type === "ceproam-app" && "FIG 04 // CEPROAM MOBILE RUNTIME"}
          {type === "learnvault-web" && "FIG 05 // LEARNVAULT KNOWLEDGE INDEX"}
          {type === "gandg-culinary" && "FIG 06 // G&G HOSPITALITY STOREFRONT"}
          {type === "apk-releases" && "FIG 07 // ANDROID APK RELEASE ARCHIVE"}
          {type === "core-systems" && "FIG 08 // C++ RECORDS & WEB UTILITIES"}
        </span>
        <span className="tabular-nums opacity-75">SCALE 1:1</span>
      </div>

      {/* Center Architectural Schematic per Project */}
      <div className="my-auto py-3">
        {type === "koyo-mobile-web" && (
          <div className="grid grid-cols-12 gap-3 items-center">
            {/* Phone Frame */}
            <div className="col-span-5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] p-2.5 shadow-xs">
              <div className="flex items-center justify-between text-[0.625rem] font-mono text-[var(--text-muted)] mb-2">
                <span>YORUBA · L04</span>
                <RiSmartphoneLine className="size-3.5 text-[var(--accent)]" />
              </div>
              <div className="rounded border border-[var(--border-hairline)] bg-[var(--surface-paper)] p-2 mb-2">
                <div className="text-[0.625rem] uppercase tracking-widest text-[var(--text-muted)]">
                  Phrase Drill
                </div>
                <div className="text-xs font-semibold text-[var(--text-primary)] mt-0.5">
                  E kaaro — Good morning
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[0.65rem] text-[var(--accent)] font-mono">
                  <RiVolumeUpLine className="size-3.5" />
                  <span>NATIVE AUDIO · 48KHZ</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[0.625rem] font-mono text-[var(--text-muted)]">
                <span>YORUBA / IGBO / EDO</span>
                <span className="text-[var(--text-primary)] font-semibold">94%</span>
              </div>
            </div>

            {/* Web Frame */}
            <div className="col-span-7 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-3">
              <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-1.5 mb-2 text-[0.625rem] font-mono text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <RiGlobalLine className="size-3 text-[var(--accent)]" />
                  koyoapp.com
                </span>
                <span>2026 OVERHAUL</span>
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-medium text-[var(--text-primary)]">
                  Reconnect with Nigerian Heritage
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  {["Yoruba", "Igbo", "Edo"].map((lang) => (
                    <div
                      key={lang}
                      className="rounded border border-[var(--border-hairline)] bg-[var(--surface-paper)] px-2 py-1 text-[0.625rem] font-mono flex items-center justify-between"
                    >
                      <span>{lang}</span>
                      <RiCheckLine className="size-3 text-[var(--accent)]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "jaraaf-suite" && (
          <div className="grid grid-cols-12 gap-3 items-stretch">
            <div className="col-span-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-3 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[0.625rem] font-mono text-[var(--text-muted)] border-b border-[var(--border-hairline)] pb-1.5">
                <span className="flex items-center gap-1">
                  <RiGlobalLine className="size-3 text-[var(--accent)]" />
                  CLIENT SURFACE
                </span>
                <span>VERCEL</span>
              </div>
              <div className="my-2 space-y-1.5">
                <div className="text-[0.7rem] font-semibold text-[var(--text-primary)]">
                  jaraaf-frontend.vercel.app
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="rounded border border-[var(--border-hairline)] bg-[var(--surface-paper)] p-1.5 text-[0.625rem] font-mono">
                    Catalog View
                  </div>
                  <div className="rounded border border-[var(--border-hairline)] bg-[var(--surface-paper)] p-1.5 text-[0.625rem] font-mono">
                    Client Portal
                  </div>
                </div>
              </div>
              <div className="text-[0.6rem] font-mono text-[var(--text-muted)]">
                PUBLIC APPLICATION LAYER
              </div>
            </div>

            <div className="col-span-6 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] p-3 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[0.625rem] font-mono text-[var(--text-muted)] border-b border-[var(--border-hairline)] pb-1.5">
                <span className="flex items-center gap-1 text-[var(--accent)]">
                  <RiLayoutGridLine className="size-3" />
                  ADMIN CONTROL
                </span>
                <span>OPS</span>
              </div>
              <div className="my-2 space-y-1.5">
                <div className="text-[0.7rem] font-semibold text-[var(--text-primary)]">
                  jaraaf-admin-dashboard
                </div>
                <div className="flex items-center justify-between rounded border border-[var(--border-hairline)] bg-[var(--surface-paper)] px-2 py-1 text-[0.625rem] font-mono">
                  <span>ACTIVE RECORDS</span>
                  <span className="text-[var(--accent)] font-semibold">SYNCED</span>
                </div>
              </div>
              <div className="text-[0.6rem] font-mono text-[var(--text-muted)] flex items-center justify-between">
                <span>ROLE-BASED ACCESS</span>
                <RiPulseLine className="size-3 text-[var(--accent)]" />
              </div>
            </div>
          </div>
        )}

        {type === "duvic-logistics" && (
          <div className="grid grid-cols-12 gap-2.5 items-center">
            <div className="col-span-5 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-2.5">
              <div className="flex items-center justify-between text-[0.625rem] font-mono text-[var(--text-muted)] mb-1.5">
                <span className="flex items-center gap-1">
                  <RiShoppingBag3Line className="size-3 text-[var(--accent)]" />
                  DUVICDROP
                </span>
                <span>CUSTOMER</span>
              </div>
              <div className="rounded border border-[var(--border-hairline)] bg-[var(--surface-paper)] p-2 text-[0.65rem] space-y-1">
                <div className="font-semibold text-[var(--text-primary)]">UK Grocery & Meals</div>
                <div className="text-[0.6rem] font-mono text-[var(--text-muted)]">
                  Basket · Instant Checkout
                </div>
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-center justify-center text-[0.6rem] font-mono text-[var(--accent)]">
              <div className="w-full border-t border-dashed border-[var(--accent)] my-1" />
              <span>DISPATCH</span>
            </div>

            <div className="col-span-5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] p-2.5">
              <div className="flex items-center justify-between text-[0.625rem] font-mono text-[var(--text-muted)] mb-1.5">
                <span className="flex items-center gap-1 text-[var(--accent)]">
                  <RiTruckLine className="size-3" />
                  DUVIC RIDER
                </span>
                <span>COURIER</span>
              </div>
              <div className="rounded border border-[var(--border-hairline)] bg-[var(--surface-paper)] p-2 text-[0.65rem] space-y-1">
                <div className="font-semibold text-[var(--text-primary)]">Route Fulfillment</div>
                <div className="text-[0.6rem] font-mono text-[var(--text-muted)]">
                  Live Queue · Drop Status
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "ceproam-app" && (
          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] p-3">
              <div className="flex items-center justify-between text-[0.625rem] font-mono text-[var(--text-muted)] mb-2">
                <span>PACKAGE ID</span>
                <RiShieldCheckLine className="size-3.5 text-[var(--accent)]" />
              </div>
              <div className="text-xs font-mono font-semibold text-[var(--text-primary)] truncate">
                com.ceproam.com
              </div>
              <div className="mt-2 text-[0.625rem] font-mono text-[var(--text-muted)]">
                React Native · Play Store
              </div>
            </div>
            <div className="col-span-7 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-3 space-y-2">
              <div className="flex items-center justify-between text-[0.625rem] font-mono text-[var(--text-muted)]">
                <span>CEPHAS DIGITAL SUITE</span>
                <span className="text-[var(--accent)]">PRODUCTION</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded border border-[var(--border-hairline)] bg-[var(--surface-paper)] p-2 text-[0.625rem] font-mono">
                  Native UI Flows
                </div>
                <div className="rounded border border-[var(--border-hairline)] bg-[var(--surface-paper)] p-2 text-[0.625rem] font-mono">
                  API State Sync
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "learnvault-web" && (
          <div className="rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-3">
            <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-2 mb-2.5 text-[0.625rem] font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <RiBookOpenLine className="size-3.5 text-[var(--accent)]" />
                learnvault-ia4s.onrender.com
              </span>
              <span>KNOWLEDGE REPOSITORY</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { code: "MOD 01", title: "Curated Tracks" },
                { code: "MOD 02", title: "Study Vault" },
                { code: "MOD 03", title: "Progress Index" },
              ].map((item) => (
                <div
                  key={item.code}
                  className="rounded border border-[var(--border-hairline)] bg-[var(--surface-paper)] p-2"
                >
                  <div className="text-[0.58rem] font-mono text-[var(--accent)]">{item.code}</div>
                  <div className="text-[0.68rem] font-medium text-[var(--text-primary)] mt-0.5">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "gandg-culinary" && (
          <div className="rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-3">
            <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-2 mb-2.5 text-[0.625rem] font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <RiRestaurantLine className="size-3.5 text-[var(--accent)]" />
                gandg-restaurant.onrender.com
              </span>
              <span>CULINARY & RESERVATIONS</span>
            </div>
            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-7 rounded border border-[var(--border-hairline)] bg-[var(--surface-paper)] p-2">
                <div className="text-[0.6rem] font-mono uppercase text-[var(--text-muted)]">
                  Tasting & A La Carte
                </div>
                <div className="text-xs font-medium text-[var(--text-primary)] mt-0.5">
                  Interactive Course Menu & Table Booking
                </div>
              </div>
              <div className="col-span-5 rounded border border-[var(--border-strong)] bg-[var(--surface-paper)] p-2 text-[0.625rem] font-mono flex flex-col justify-between">
                <span className="text-[var(--accent)]">DIRECT ORDER</span>
                <span className="text-[var(--text-primary)]">Dine-In · Takeout</span>
              </div>
            </div>
          </div>
        )}

        {type === "apk-releases" && (
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                id: "BUILD // 1qHm72jA",
                name: "Android APK Release I",
                meta: "React Native · Signed Package",
              },
              {
                id: "BUILD // 1Ptlk6Lt",
                name: "Android APK Release II",
                meta: "Expo Runtime · QA Verified",
              },
            ].map((apk) => (
              <div
                key={apk.id}
                className="rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-3 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[0.6rem] font-mono text-[var(--text-muted)] mb-1.5">
                  <span>{apk.id}</span>
                  <RiAndroidFill className="size-3.5 text-[var(--accent)]" />
                </div>
                <div className="text-xs font-semibold text-[var(--text-primary)]">{apk.name}</div>
                <div className="text-[0.625rem] font-mono text-[var(--text-muted)] mt-1">
                  {apk.meta}
                </div>
              </div>
            ))}
          </div>
        )}

        {type === "core-systems" && (
          <div className="grid grid-cols-3 gap-2">
            {[
              {
                tag: "C++ · SWEP GROUP D",
                title: "Hospital Record System",
                sub: "Patient & Clinical Index",
              },
              {
                tag: "SUNMENCE",
                title: "E-Commerce API Store",
                sub: "REST Catalog Integration",
              },
              {
                tag: "OASIS INFOBYTE",
                title: "Thermal Unit Engine",
                sub: "Celsius · Kelvin · Fahrenheit",
              },
            ].map((sys) => (
              <div
                key={sys.tag}
                className="rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-2.5"
              >
                <div className="flex items-center justify-between text-[0.58rem] font-mono text-[var(--accent)] mb-1">
                  <span>{sys.tag}</span>
                  <RiTerminalBoxLine className="size-3" />
                </div>
                <div className="text-[0.7rem] font-semibold text-[var(--text-primary)]">
                  {sys.title}
                </div>
                <div className="text-[0.6rem] font-mono text-[var(--text-muted)] mt-0.5">
                  {sys.sub}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Technical Coordinate Strip */}
      <div className="flex items-center justify-between border-t border-[var(--border-hairline)] pt-2 text-[0.625rem] font-mono text-[var(--text-muted)]">
        <span className="flex items-center gap-1.5">
          <RiEqualizerLine className="size-3 text-[var(--accent)]" />
          <span>VERIFIED PRODUCTION ARTIFACT</span>
        </span>
        <span className="flex items-center gap-1 text-[var(--text-primary)]">
          <span>INSPECT DOSSIER</span>
          <RiArrowRightUpLine className="size-3" />
        </span>
      </div>
    </div>
  );
}
