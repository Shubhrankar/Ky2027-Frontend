"use client";

import { Building2, MapPin, Loader2, AlertCircle } from "lucide-react";
import { type College } from "@/lib/api/hooks";
import { COLORS } from "@/components/pages/complete-profile/constants/palette";
import { useCallback } from "react";

interface CollegeDropdownProps {
  ref?: React.Ref<HTMLDivElement>;
  colleges: College[];
  isSearching: boolean;
  onSelect: (college: College) => void;
  onManualMode: () => void;
}

export function CollegeDropdown({
  ref,
  colleges,
  isSearching,
  onSelect,
  onManualMode,
}: CollegeDropdownProps) {
  // Prevent scroll from propagating to parent when at scroll boundaries
  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = element;
    const isAtTop = scrollTop === 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight;

    // If scrolling up at top or scrolling down at bottom, prevent propagation
    if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
      e.preventDefault();
    }
    
    // Always stop propagation to parent
    e.stopPropagation();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute left-0 right-0 z-50 mt-2 rounded-xl overflow-hidden"
      style={{
        background: COLORS.BG_ROYAL,
        border: `1px solid ${COLORS.GOLD}30`,
        boxShadow: `0 10px 40px rgba(0,0,0,0.5)`,
      }}
    >
      <div 
        className="overflow-y-auto overflow-x-hidden"
        style={{
          maxHeight: "280px",
          overscrollBehavior: "contain",
        }}
        onWheel={handleWheel}
      >
        {isSearching ? (
          <div className="flex items-center justify-center gap-3 p-6">
            <Loader2 className="h-5 w-5 animate-spin" style={{ color: COLORS.GOLD }} />
            <span style={{ color: `${COLORS.CREAM}60` }}>Searching...</span>
          </div>
        ) : colleges.length > 0 ? (
          <>
            {colleges.map((college: College) => (
              <button
                key={college.id}
                onClick={() => onSelect(college)}
                className="w-full text-left px-4 py-3 transition-all hover:bg-white/5"
                style={{
                  borderBottom: `1px solid ${COLORS.GOLD}10`,
                }}
              >
                <div className="flex items-start gap-3">
                  <Building2
                    className="h-5 w-5 mt-0.5 shrink-0"
                    style={{ color: COLORS.GOLD }}
                  />
                  <div className="min-w-0 flex-1">
                    <p
                      className="font-medium text-sm leading-tight"
                      style={{ color: COLORS.CREAM }}
                    >
                      {college.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      {college.district && (
                        <div className="flex items-center gap-1">
                          <MapPin
                            className="h-3 w-3 shrink-0"
                            style={{ color: `${COLORS.CREAM}40` }}
                          />
                          <span
                            className="text-xs"
                            style={{ color: `${COLORS.CREAM}50` }}
                          >
                            {college.district}
                          </span>
                        </div>
                      )}
                      {college.institutionType && (
                        <span
                          className="text-xs px-1.5 py-0.5 rounded"
                          style={{ 
                            color: COLORS.GOLD,
                            background: `${COLORS.GOLD}15`,
                          }}
                        >
                          {college.institutionType}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </>
        ) : (
          <div className="p-6 text-center">
            <AlertCircle
              className="h-8 w-8 mx-auto mb-2"
              style={{ color: `${COLORS.CREAM}40` }}
            />
            <p style={{ color: `${COLORS.CREAM}60` }}>No colleges found</p>
            <button
              onClick={onManualMode}
              className="mt-3 text-sm underline"
              style={{ color: COLORS.GOLD }}
            >
              Enter college name manually
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
