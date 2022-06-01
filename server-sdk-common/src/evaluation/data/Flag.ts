import { ClientSideAvailability } from './ClientSideAvailability';
import { Prerequisite } from './Prerequisite';
import { Rollout } from './Rollout';
import { Rule } from './Rule';
import { Target } from './Target';
import { Versioned } from './Versioned';

type VariationOrRollout = number | Rollout;

export interface Flag extends Versioned {
  on: boolean,
  prerequisites?: Prerequisite[];
  targets?: Omit<Target, 'contextKind'>[],
  contextTargets?: Target[],
  rules?: Rule[],
  fallthrough: VariationOrRollout,
  offVariation?: number;
  variations: any[];
  clientSide?: boolean;
  clientSideAvailability?: ClientSideAvailability;
  salt?: string;
  trackEvents?: boolean;
  trackEventsFallthrough?: boolean;
  debugEventsUntilDate?: number
}
