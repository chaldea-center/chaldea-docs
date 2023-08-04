# FAQ

### What is Atlas DB URL?

Chaldea uses [Atlas Academy DB](https://apps.atlasacademy.io/db/) as backend, so you can copy Atlas's link directly for
loading specific quests or skills.

E.g. URL of Kama's second Interlude: https://apps.atlasacademy.io/db/JP/quest/91603792/3

E.g. URL of Kiyohime's third skill: https://apps.atlasacademy.io/db/JP/skill/235550

### Shared Teams

If the current team clears the selected quest without using any custom functionality, Laplace will allow this team to be
uploaded so it can be viewed by others.

- For each quest a user can only upload 10 different teams
- One upload every 5 minutes
- Users can manage their uploaded teams using "Manage Uploaded Teams" located in the main menu page of Laplace

Teams that used the following functions are disqualified from uploads

- Custom Quests
- Non-playable servants
- Custom Skills
- Skip Waves
- Enemy Simulations

### Custom Skills

There are four different ways to construct a custom quest:

1. Select from skill list
2. Ust Atlas DB URL
3. Import skill data from JSON format. Similar to custom quests, here it also follows the Atlas format
4. Input values directly for the listed buff types
   - Buff target can be customized
   - Click "X Times" and "X Turns" to set durations
   - Click "X% Rate" to set success rate

### About Team Setup

In the team setup section, servant strengthen status can be configured to match that of a specific FGO server. Whether to
use current user's planning data can also be configured here. When a servant is selected, Laplace will automatically set
servant options matching the current strengthen status config and user's planning data.

Also, craft essence options can also be saved in planning data.

### Ping Servants/CEs to Top

In the details page, there is an option in the top right popup menu to select if a servant or CE is pinged at top.

Also, for CEs Laplace will automatically ping event CEs of the selected quest and bond CEs of the current servant.

### Check Detailed Buff

Aside from clicking the servants' icon or manually checking debug logs, the recorded data in the record section can also
be clicked to view specific buffs at that moment.
