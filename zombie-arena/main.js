/**
 * Zombie Arena (좀비 아레나)
 * ------------------------------------------------------------
 * Original Copyright Notice
 *
 * Copyright (c) 2025 Euiyun Kim (geniuskey@gmail.com)
 *
 * This web application is an original creation by the developer known as
 * "geniuskey". Any third-party registration of this work, including copyright
 * filings made without the author's consent, does not invalidate the author's
 * original rights under Korean Copyright Law and international copyright
 * principles.
 *
 * Notes:
 * - Copyright is automatically granted upon creation (“무조건 자동 발생”).
 * - Copyright registration by unrelated parties does NOT transfer ownership.
 * - MIT License permits reuse but does NOT abandon authorship or ownership.
 * - Unauthorized registration by third parties shall be considered invalid.
 *
 * Original Creator: Euiyun Kim (geniuskey@gmail.com)
 * Service Web Page: https://geniuskey.github.io/zombie-area/
 * ------------------------------------------------------------
 */

const i18n = {
    ko: {
        title: '좀비 아레나', participants: '참여자 명단',
        participantsPlaceholder: '이름을 입력하세요\n예: 철수, 영희, 민수',
        hint: '쉼표 또는 줄바꿈으로 구분', initialZombies: '🧟 초기 좀비 수',
        survivors: '🏆 최종 생존자 수', start: '🎮 시작', infectionOrder: '🏆 감염 순서',
        rankingPlaceholder: '게임을 시작하면<br>감염 순서가 표시됩니다',
        copyResult: '결과 복사', github: 'GitHub 저장소', coffee: '개발자에게 커피 사주기 ☕',
        finalSurvivor: '최후의 생존자!', survivalTime: '생존 시간: {time}초', confirm: '확인',
        helpTitle: '🧟 좀비 아레나 게임', helpRulesTitle: '🎮 게임 규칙',
        helpRules: '참여자들이 아레나에서 좀비를 피해 생존합니다. 최종 생존자 수만큼 남으면 게임 종료!',
        helpMovementTitle: '🏃 이동 시스템',
        helpMovement: '• 인간이 좀비를 보면 반대 방향으로 전력 질주<br>• 좀비는 시야가 좁지만 인간보다 멀리 봅니다<br>• 초기 좀비는 한 번 물면 죽습니다',
        helpShrinkTitle: '🔥 영역 축소',
        helpShrink: '• 시간이 지나면 영역이 축소됩니다<br>• 좀비가 10마리를 초과하면 오래된 좀비부터 굶어 죽습니다',
        understood: '이해했습니다!', copied: '📋 결과가 복사되었습니다!', copyFailed: '❌ 복사 실패',
        minParticipants: '최소 2명 이상의 참여자가 필요합니다!',
        survivorError: '최종 생존자 수는 참여자 수보다 적어야 합니다!',
        initialZombie: '초기 좀비', infected: '감염', zoneOut: '영역 이탈', survivor: '생존', winner: '승리!',
        resultTitle: '🧟 좀비 아레나 결과 🧟', gameTime: '⏱️ 게임 시간: {time}초',
        finalSurvivors: '🏆 최종 생존자', infectionOrderResult: '💀 감염 순서',
        zombieNames: ['좀비A','좀비B','좀비C','좀비D','좀비E','좀비F','좀비G','좀비H','좀비I','좀비J'],
        shrinkWarning: '⚠️ 영역 축소!',
        infectMessage: '{attacker}가 {victim}을(를) 물어 뜯어 좀비로 만들었습니다!',
        zombieDied: '{name}가 굶어 죽었습니다.', zoneOutMessage: '{name}이(가) 영역 밖으로 밀려났습니다!'
    },
    en: {
        title: 'Zombie Arena', participants: 'Participants',
        participantsPlaceholder: 'Enter names\nEx: John, Jane, Mike',
        hint: 'Separate by comma or newline', initialZombies: '🧟 Initial Zombies',
        survivors: '🏆 Final Survivors', start: '🎮 Start', infectionOrder: '🏆 Infection Order',
        rankingPlaceholder: 'Start the game to see<br>the infection order',
        copyResult: 'Copy Result', github: 'GitHub Repository', coffee: 'Buy Developer a Coffee ☕',
        finalSurvivor: 'Final Survivor!', survivalTime: 'Survival Time: {time}s', confirm: 'OK',
        helpTitle: '🧟 Zombie Arena Game', helpRulesTitle: '🎮 Game Rules',
        helpRules: 'Participants survive in the arena while avoiding zombies. Game ends when only the final survivors remain!',
        helpMovementTitle: '🏃 Movement System',
        helpMovement: '• Humans sprint in opposite direction when spotting zombies<br>• Zombies have narrow but longer vision than humans<br>• Initial zombies die after one bite',
        helpShrinkTitle: '🔥 Zone Shrinking',
        helpShrink: '• The zone shrinks over time<br>• When zombies exceed 10, oldest zombies starve to death',
        understood: 'Got it!', copied: '📋 Result copied!', copyFailed: '❌ Copy failed',
        minParticipants: 'At least 2 participants required!',
        survivorError: 'Final survivors must be less than total participants!',
        initialZombie: 'Initial Zombie', infected: 'Infected', zoneOut: 'Out of Zone', survivor: 'Alive', winner: 'Winner!',
        resultTitle: '🧟 Zombie Arena Result 🧟', gameTime: '⏱️ Game Time: {time}s',
        finalSurvivors: '🏆 Final Survivors', infectionOrderResult: '💀 Infection Order',
        zombieNames: ['Zombie A','Zombie B','Zombie C','Zombie D','Zombie E','Zombie F','Zombie G','Zombie H','Zombie I','Zombie J'],
        shrinkWarning: '⚠️ Zone Shrinking!',
        infectMessage: '{attacker} bit {victim} and turned them into a zombie!',
        zombieDied: '{name} starved to death.', zoneOutMessage: '{name} was pushed out of the zone!'
    },
    zh: {
        title: '僵尸竞技场', participants: '参与者名单',
        participantsPlaceholder: '输入姓名\n例：小明，小红，小刚',
        hint: '用逗号或换行分隔', initialZombies: '🧟 初始僵尸数',
        survivors: '🏆 最终幸存者数', start: '🎮 开始', infectionOrder: '🏆 感染顺序',
        rankingPlaceholder: '开始游戏后<br>将显示感染顺序',
        copyResult: '复制结果', github: 'GitHub 仓库', coffee: '请开发者喝咖啡 ☕',
        finalSurvivor: '最后的幸存者！', survivalTime: '生存时间：{time}秒', confirm: '确定',
        helpTitle: '🧟 僵尸竞技场游戏', helpRulesTitle: '🎮 游戏规则',
        helpRules: '参与者在竞技场中躲避僵尸生存。当只剩下最终幸存者数量时游戏结束！',
        helpMovementTitle: '🏃 移动系统',
        helpMovement: '• 人类看到僵尸时会向相反方向冲刺<br>• 僵尸视野窄但比人类看得远<br>• 初始僵尸咬一次后会死亡',
        helpShrinkTitle: '🔥 区域缩小',
        helpShrink: '• 随时间推移区域会缩小<br>• 僵尸超过10只时，最老的僵尸会饿死',
        understood: '明白了！', copied: '📋 结果已复制！', copyFailed: '❌ 复制失败',
        minParticipants: '至少需要2名参与者！', survivorError: '最终幸存者数必须少于参与者总数！',
        initialZombie: '初始僵尸', infected: '感染', zoneOut: '离开区域', survivor: '存活', winner: '胜利！',
        resultTitle: '🧟 僵尸竞技场结果 🧟', gameTime: '⏱️ 游戏时间：{time}秒',
        finalSurvivors: '🏆 最终幸存者', infectionOrderResult: '💀 感染顺序',
        zombieNames: ['僵尸A','僵尸B','僵尸C','僵尸D','僵尸E','僵尸F','僵尸G','僵尸H','僵尸I','僵尸J'],
        shrinkWarning: '⚠️ 区域缩小！',
        infectMessage: '{attacker}咬了{victim}，把他变成了僵尸！',
        zombieDied: '{name}饿死了。', zoneOutMessage: '{name}被推出了区域！'
    }
};

let currentLang = 'ko';

function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const lang = browserLang.split('-')[0].toLowerCase();
    return i18n[lang] ? lang : 'en';
}

function t(key, params = {}) {
    let text = i18n[currentLang][key] || i18n['en'][key] || key;
    Object.keys(params).forEach(k => { text = text.replace('{' + k + '}', params[k]); });
    return text;
}

function updateUI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => el.innerHTML = t(el.getAttribute('data-i18n')));
    document.querySelectorAll('[data-placeholder-i18n]').forEach(el => el.placeholder = t(el.getAttribute('data-placeholder-i18n')));
    document.querySelectorAll('[data-tooltip-i18n]').forEach(el => el.setAttribute('data-tooltip', t(el.getAttribute('data-tooltip-i18n'))));
    document.getElementById('shrinkWarning').textContent = t('shrinkWarning');
}

class ZombieSurvival {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.participants = []; this.entities = []; this.deadZombies = [];
        this.infectedOrder = []; this.notifications = [];
        this.isRunning = false; this.gameStarted = false;
        this.startTime = 0; this.endTime = 0;
        this.zombieCount = 2; this.survivorCount = 1;
        this.entityRadius = 10; this.maxZombies = 10;
        this.humanWalkSpeed = 0.6; this.humanRunSpeed = 2.5;
        this.zombieWalkSpeed = 0.5; this.zombieChaseSpeed = 2.0;
        this.humanFovAngle = 140; this.zombieFovAngle = 80;
        this.zombieDetectRange = 250;
        this.humanDetectRange = this.zombieDetectRange * 0.9; // 인간은 좀비의 90%
        this.runDuration = 60;
        this.humanColors = ['#4CAF50','#2196F3','#FF9800','#9C27B0','#00BCD4','#FFEB3B','#E91E63','#3F51B5','#009688','#FF5722','#607D8B','#8BC34A'];
        this.centerX = 0; this.centerY = 0; this.currentRadius = 0;
        this.targetRadius = 0; this.targetCenterX = 0; this.targetCenterY = 0;
        this.shrinkPhase = 0; this.shrinkTimer = 0;
        this.shrinkInterval = 600; this.shrinkWarningTime = 180; this.isShrinking = false;
        this.setupCanvas(); this.bindEvents();
    }
    
    get zombieNames() { return t('zombieNames'); }
    
    setupCanvas() {
        const wrapper = this.canvas.parentElement;
        this.canvas.width = wrapper.clientWidth; this.canvas.height = wrapper.clientHeight;
        this.centerX = this.canvas.width / 2; this.centerY = this.canvas.height / 2;
        this.currentRadius = Math.min(this.canvas.width, this.canvas.height) / 2 - 15;
        this.targetRadius = this.currentRadius;
        this.targetCenterX = this.centerX; this.targetCenterY = this.centerY;
    }
    
    bindEvents() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const oldW = this.canvas.width, oldH = this.canvas.height;
                this.setupCanvas();
                if (!this.isRunning) this.redistributeEntities(oldW, oldH);
                this.draw();
            }, 100);
        });
    }
    
    redistributeEntities(oldW, oldH) {
        const scaleX = this.canvas.width / oldW, scaleY = this.canvas.height / oldH;
        for (const e of this.entities) { e.x *= scaleX; e.y *= scaleY; }
    }
    
    setParticipants(names) { this.participants = names.filter(n => n.trim()); this.reset(); }
    
    reset() {
        this.isRunning = false; this.gameStarted = false;
        this.entities = []; this.deadZombies = []; this.infectedOrder = []; this.notifications = [];
        this.startTime = 0; this.endTime = 0;
        this.shrinkPhase = 0; this.shrinkTimer = 0; this.isShrinking = false;
        this.setupCanvas(); this.setupEntities(false);
        this.draw(); this.updateUI(); this.updateRanking();
        document.getElementById('shrinkWarning').style.display = 'none';
        document.getElementById('timerDisplay').textContent = '00:00';
    }
    
    setupEntities(includeZombies = true) {
        this.entities = [];
        const shuffled = [...this.participants].sort(() => Math.random() - 0.5);
        const totalCount = includeZombies ? shuffled.length + this.zombieCount : shuffled.length;
        const positions = this.generateSpacedPositions(totalCount);
        
        for (let i = 0; i < shuffled.length; i++) {
            this.entities.push({
                name: shuffled[i], x: positions[i].x, y: positions[i].y, vx: 0, vy: 0,
                angle: Math.random() * Math.PI * 2, isZombie: false, isRunning: false, runTimer: 0,
                color: this.humanColors[i % this.humanColors.length],
                targetAngle: Math.random() * Math.PI * 2, wanderTimer: Math.random() * 120,
                hasTarget: false, isInitialZombie: false, health: 100,
                isTransforming: false, transformTimer: 0, eatingTimer: 0, zombieKills: 0,
                zombifiedAt: 0, helpTimer: 0
            });
        }
        
        if (includeZombies) {
            for (let i = 0; i < this.zombieCount; i++) {
                const pos = positions[shuffled.length + i];
                this.entities.push({
                    name: this.zombieNames[i] || ('Zombie ' + (i+1)),
                    x: pos.x, y: pos.y, vx: 0, vy: 0, angle: Math.random() * Math.PI * 2,
                    isZombie: true, isRunning: false, runTimer: 0, color: '#666',
                    targetAngle: Math.random() * Math.PI * 2, wanderTimer: Math.random() * 120,
                    hasTarget: false, isInitialZombie: true, health: 100,
                    isTransforming: false, transformTimer: 0, eatingTimer: 0, zombieKills: 0,
                    zombifiedAt: Date.now(), helpTimer: 0
                });
            }
        }
    }
    
    generateSpacedPositions(count) {
        const positions = [], padding = 30;
        for (let i = 0; i < count; i++) {
            let bestPos = null, bestMinDist = 0;
            for (let attempt = 0; attempt < 50; attempt++) {
                const angle = Math.random() * Math.PI * 2;
                const dist = Math.random() * (this.currentRadius - padding);
                const pos = { x: this.centerX + Math.cos(angle) * dist, y: this.centerY + Math.sin(angle) * dist };
                let minDistToOthers = Infinity;
                for (const other of positions) {
                    const dx = pos.x - other.x, dy = pos.y - other.y;
                    minDistToOthers = Math.min(minDistToOthers, Math.sqrt(dx*dx + dy*dy));
                }
                if (minDistToOthers > bestMinDist) { bestMinDist = minDistToOthers; bestPos = pos; }
                if (minDistToOthers >= 50) break;
            }
            positions.push(bestPos || { x: this.centerX + (Math.random()-0.5)*this.currentRadius, y: this.centerY + (Math.random()-0.5)*this.currentRadius });
        }
        return positions;
    }
    
    addNotification(message) { this.notifications.push({ text: message, timer: 180, opacity: 1 }); }
    
    updateNotifications() {
        for (let i = this.notifications.length - 1; i >= 0; i--) {
            this.notifications[i].timer--;
            if (this.notifications[i].timer < 30) this.notifications[i].opacity = this.notifications[i].timer / 30;
            if (this.notifications[i].timer <= 0) this.notifications.splice(i, 1);
        }
        while (this.notifications.length > 5) this.notifications.shift();
    }
    
    start() {
        if (this.participants.length < 2) { alert(t('minParticipants')); return; }
        this.reset(); this.setupEntities(true);
        this.gameStarted = true; this.isRunning = true;
        this.startTime = Date.now(); this.endTime = 0;
        this.setControlsDisabled(true); this.draw(); this.gameLoop();
    }
    
    stop() { this.isRunning = false; this.setControlsDisabled(false); }
    
    setControlsDisabled(disabled) {
        document.getElementById('zombieCount').disabled = disabled;
        document.getElementById('survivorCount').disabled = disabled;
    }
    
    gameLoop() {
        if (!this.isRunning) return;
        this.update(); this.draw(); this.updateUI();
        const humans = this.entities.filter(e => !e.isZombie && !e.isTransforming);
        if (humans.length <= this.survivorCount && this.isRunning) { this.endGame(humans); return; }
        requestAnimationFrame(() => this.gameLoop());
    }
    
    getWallAvoidanceAngle(entity) {
        const dx = entity.x - this.centerX, dy = entity.y - this.centerY;
        const distFromCenter = Math.sqrt(dx * dx + dy * dy);
        if (this.currentRadius - distFromCenter < 50) return Math.atan2(-dy, -dx);
        return null;
    }
    
    getEscapeAngle(human, zombie) {
        const dx = human.x - zombie.x, dy = human.y - zombie.y;
        let escapeAngle = Math.atan2(dy, dx);
        const targetX = human.x + Math.cos(escapeAngle) * 100;
        const targetY = human.y + Math.sin(escapeAngle) * 100;
        const targetDist = Math.sqrt(Math.pow(targetX - this.centerX, 2) + Math.pow(targetY - this.centerY, 2));
        
        if (targetDist > this.currentRadius - 20) {
            const toCenter = Math.atan2(this.centerY - human.y, this.centerX - human.x);
            const cross = dx * (this.centerY - human.y) - dy * (this.centerX - human.x);
            escapeAngle = toCenter + (cross > 0 ? Math.PI / 2 : -Math.PI / 2);
        }
        return escapeAngle + (Math.random() - 0.5) * 0.3;
    }
    
    update() {
        this.updateShrinking(); this.updateTransformations();
        this.updateNotifications(); this.updateDeadZombies();
        
        const humans = this.entities.filter(e => !e.isZombie && !e.isTransforming);
        const zombies = this.entities.filter(e => e.isZombie);
        this.checkZombieLimit();
        
        for (const entity of this.entities) {
            if (entity.isTransforming) continue;
            if (entity.helpTimer > 0) entity.helpTimer--;
            if (entity.eatingTimer > 0) { entity.eatingTimer--; entity.vx = 0; entity.vy = 0; continue; }
            
            if (entity.isZombie) this.updateZombie(entity, humans);
            else this.updateHuman(entity, zombies);
            
            entity.x += entity.vx; entity.y += entity.vy;
            entity.vx *= 0.95; entity.vy *= 0.95;
            
            const dx = entity.x - this.centerX, dy = entity.y - this.centerY;
            const distFromCenter = Math.sqrt(dx * dx + dy * dy);
            const maxDist = this.currentRadius - this.entityRadius;
            
            if (distFromCenter > maxDist) {
                const angle = Math.atan2(dy, dx);
                entity.x = this.centerX + Math.cos(angle) * maxDist;
                entity.y = this.centerY + Math.sin(angle) * maxDist;
                const normalX = dx / distFromCenter, normalY = dy / distFromCenter;
                const dot = entity.vx * normalX + entity.vy * normalY;
                entity.vx -= 2 * dot * normalX * 0.5; entity.vy -= 2 * dot * normalY * 0.5;
            }
        }
        this.checkInfections(humans, zombies); this.handleCollisions();
    }
    
    checkZombieLimit() {
        const zombies = this.entities.filter(e => e.isZombie && !e.isInitialZombie);
        if (zombies.length > this.maxZombies) {
            zombies.sort((a, b) => a.zombifiedAt - b.zombifiedAt);
            const toKill = zombies.length - this.maxZombies;
            for (let i = 0; i < toKill; i++) {
                const zombie = zombies[i];
                this.addNotification(t('zombieDied', { name: zombie.name }));
                this.deadZombies.push({ ...zombie, fadeTimer: 60 });
                const idx = this.entities.indexOf(zombie);
                if (idx > -1) this.entities.splice(idx, 1);
            }
        }
    }
    
    updateDeadZombies() {
        for (let i = this.deadZombies.length - 1; i >= 0; i--) {
            this.deadZombies[i].fadeTimer--;
            if (this.deadZombies[i].fadeTimer <= 0) this.deadZombies.splice(i, 1);
        }
    }
    
    updateTransformations() {
        for (const entity of this.entities) {
            if (entity.isTransforming) {
                entity.transformTimer--;
                if (entity.transformTimer <= 0) {
                    entity.isTransforming = false; entity.isZombie = true;
                    entity.color = '#666'; entity.hasTarget = false;
                    entity.wanderTimer = 60; entity.zombifiedAt = Date.now();
                }
            }
        }
    }
    
    startTransformation(entity, cause, infector = null) {
        if (entity.isTransforming || entity.isZombie) return;
        entity.isTransforming = true; entity.transformTimer = 60;
        entity.vx = 0; entity.vy = 0;
        
        if (infector) {
            infector.eatingTimer = 30; infector.vx = 0; infector.vy = 0; infector.zombieKills++;
            this.addNotification(t('infectMessage', { attacker: infector.name, victim: entity.name }));
            
            if (infector.isInitialZombie && infector.zombieKills >= 1) {
                const inf = infector;
                setTimeout(() => {
                    this.deadZombies.push({ ...inf, fadeTimer: 60 });
                    const idx = this.entities.indexOf(inf);
                    if (idx > -1) this.entities.splice(idx, 1);
                }, 500);
            }
        }
        this.infectedOrder.push({ name: entity.name, time: Date.now() - this.startTime, cause: cause });
        this.updateRanking();
    }
    
    updateShrinking() {
        this.shrinkTimer++;
        const warning = document.getElementById('shrinkWarning');
        if (this.shrinkTimer > this.shrinkInterval - this.shrinkWarningTime && this.shrinkTimer < this.shrinkInterval) {
            warning.style.display = 'block';
        } else { warning.style.display = 'none'; }
        
        if (this.shrinkTimer >= this.shrinkInterval) {
            this.shrinkTimer = 0; this.shrinkPhase++;
            const maxOffset = this.currentRadius * 0.3;
            const offsetAngle = Math.random() * Math.PI * 2;
            const offsetDist = Math.random() * maxOffset;
            this.targetCenterX = this.centerX + Math.cos(offsetAngle) * offsetDist;
            this.targetCenterY = this.centerY + Math.sin(offsetAngle) * offsetDist;
            const minRadius = Math.min(50, this.currentRadius * 0.5);
            const shrinkAmount = Math.min(30 + this.shrinkPhase * 15, this.currentRadius * 0.3);
            this.targetRadius = Math.max(minRadius, this.currentRadius - shrinkAmount);
            const margin = this.targetRadius + 10;
            this.targetCenterX = Math.max(margin, Math.min(this.canvas.width - margin, this.targetCenterX));
            this.targetCenterY = Math.max(margin, Math.min(this.canvas.height - margin, this.targetCenterY));
            this.isShrinking = true;
        }
        
        if (this.isShrinking) {
            const speed = 0.016;
            this.centerX += (this.targetCenterX - this.centerX) * speed;
            this.centerY += (this.targetCenterY - this.centerY) * speed;
            this.currentRadius += (this.targetRadius - this.currentRadius) * speed;
            if (Math.abs(this.currentRadius - this.targetRadius) < 1) {
                this.currentRadius = this.targetRadius;
                this.centerX = this.targetCenterX; this.centerY = this.targetCenterY;
                this.isShrinking = false;
            }
        }
    }
    
    isInFieldOfView(viewer, target, fovAngle) {
        const dx = target.x - viewer.x, dy = target.y - viewer.y;
        const angleToTarget = Math.atan2(dy, dx);
        let angleDiff = angleToTarget - viewer.angle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        return Math.abs(angleDiff) < (fovAngle / 2) * (Math.PI / 180);
    }
    
    updateZombie(zombie, humans) {
        if (humans.length === 0) return;
        const wallAngle = this.getWallAvoidanceAngle(zombie);
        if (wallAngle !== null && !zombie.hasTarget) zombie.targetAngle = wallAngle;
        
        let closestVisible = null, closestVisibleDist = Infinity;
        for (const human of humans) {
            const dx = human.x - zombie.x, dy = human.y - zombie.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < this.zombieDetectRange && this.isInFieldOfView(zombie, human, this.zombieFovAngle)) {
                if (dist < closestVisibleDist) { closestVisibleDist = dist; closestVisible = human; }
            }
        }
        
        if (closestVisible) {
            zombie.hasTarget = true;
            const dx = closestVisible.x - zombie.x, dy = closestVisible.y - zombie.y;
            const targetAngle = Math.atan2(dy, dx);
            let angleDiff = targetAngle - zombie.angle;
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
            zombie.angle += angleDiff * 0.12;
            zombie.vx = Math.cos(zombie.angle) * this.zombieChaseSpeed;
            zombie.vy = Math.sin(zombie.angle) * this.zombieChaseSpeed;
        } else {
            zombie.hasTarget = false; zombie.wanderTimer--;
            if (zombie.wanderTimer <= 0) {
                zombie.targetAngle = wallAngle !== null ? wallAngle : Math.random() * Math.PI * 2;
                zombie.wanderTimer = 60 + Math.random() * 120;
            }
            let angleDiff = zombie.targetAngle - zombie.angle;
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
            zombie.angle += angleDiff * 0.03;
            zombie.vx = Math.cos(zombie.angle) * this.zombieWalkSpeed;
            zombie.vy = Math.sin(zombie.angle) * this.zombieWalkSpeed;
        }
    }
    
    updateHuman(human, zombies) {
        if (human.runTimer > 0) human.runTimer--;
        const wallAngle = this.getWallAvoidanceAngle(human);
        if (wallAngle !== null && !human.isRunning) human.targetAngle = wallAngle;
        
        let nearestVisibleZombie = null, nearestDist = Infinity;
        for (const zombie of zombies) {
            const dx = zombie.x - human.x, dy = zombie.y - human.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < this.humanDetectRange && this.isInFieldOfView(human, zombie, this.humanFovAngle)) {
                if (dist < nearestDist) { nearestDist = dist; nearestVisibleZombie = zombie; }
            }
        }
        
        if (nearestVisibleZombie) {
            human.angle = this.getEscapeAngle(human, nearestVisibleZombie);
            human.runTimer = this.runDuration; human.isRunning = true; human.helpTimer = 45;
        }
        
        if (human.runTimer > 0) {
            human.isRunning = true;
            human.vx = Math.cos(human.angle) * this.humanRunSpeed;
            human.vy = Math.sin(human.angle) * this.humanRunSpeed;
        } else {
            human.isRunning = false; human.wanderTimer--;
            if (human.wanderTimer <= 0) {
                human.targetAngle = wallAngle !== null ? wallAngle : Math.random() * Math.PI * 2;
                human.wanderTimer = 60 + Math.random() * 120;
            }
            let angleDiff = human.targetAngle - human.angle;
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
            human.angle += angleDiff * 0.04;
            human.vx = Math.cos(human.angle) * this.humanWalkSpeed;
            human.vy = Math.sin(human.angle) * this.humanWalkSpeed;
        }
    }
    
    checkInfections(humans, zombies) {
        for (const human of humans) {
            for (const zombie of zombies) {
                if (zombie.eatingTimer > 0) continue;
                const dx = human.x - zombie.x, dy = human.y - zombie.y;
                if (Math.sqrt(dx*dx + dy*dy) < this.entityRadius * 2.2) {
                    this.startTransformation(human, t('infected'), zombie);
                }
            }
        }
    }
    
    handleCollisions() {
        for (let i = 0; i < this.entities.length; i++) {
            for (let j = i + 1; j < this.entities.length; j++) {
                const a = this.entities[i], b = this.entities[j];
                if (a.isZombie !== b.isZombie) continue;
                const dx = b.x - a.x, dy = b.y - a.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                const minDist = this.entityRadius * 2.2;
                if (dist < minDist && dist > 0) {
                    const overlap = (minDist - dist) / 2;
                    const nx = dx / dist, ny = dy / dist;
                    a.x -= nx * overlap * 0.5; a.y -= ny * overlap * 0.5;
                    b.x += nx * overlap * 0.5; b.y += ny * overlap * 0.5;
                }
            }
        }
    }
    
    draw() {
        const ctx = this.ctx;
        ctx.fillStyle = '#0a0f0a'; ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = 'rgba(255, 0, 0, 0.15)'; ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        ctx.save();
        ctx.beginPath(); ctx.arc(this.centerX, this.centerY, this.currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#111a11'; ctx.fill(); ctx.clip();
        ctx.strokeStyle = 'rgba(100, 255, 100, 0.08)'; ctx.lineWidth = 1;
        for (let x = 0; x < this.canvas.width; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, this.canvas.height); ctx.stroke(); }
        for (let y = 0; y < this.canvas.height; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(this.canvas.width, y); ctx.stroke(); }
        ctx.restore();
        
        ctx.beginPath(); ctx.arc(this.centerX, this.centerY, this.currentRadius, 0, Math.PI * 2);
        ctx.strokeStyle = this.isShrinking ? '#ff4444' : 'rgba(100, 255, 100, 0.5)';
        ctx.lineWidth = this.isShrinking ? 4 : 2; ctx.stroke();
        
        if (this.shrinkTimer > this.shrinkInterval - this.shrinkWarningTime) {
            ctx.beginPath(); ctx.arc(this.targetCenterX, this.targetCenterY, this.targetRadius, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 100, 100, 0.5)'; ctx.setLineDash([5, 5]); ctx.stroke(); ctx.setLineDash([]);
        }
        
        for (const dead of this.deadZombies) this.drawDeadZombie(dead);
        const humans = this.entities.filter(e => !e.isZombie);
        const zombies = this.entities.filter(e => e.isZombie);
        for (const e of humans) this.drawEntity(e);
        for (const e of zombies) this.drawEntity(e);
        this.drawNotifications();
    }
    
    drawDeadZombie(dead) {
        const ctx = this.ctx, alpha = dead.fadeTimer / 60;
        ctx.save(); ctx.globalAlpha = alpha;
        ctx.translate(dead.x, dead.y); ctx.rotate(dead.angle);
        ctx.fillStyle = '#3a3a3a';
        ctx.beginPath(); ctx.ellipse(0, 0, this.entityRadius, this.entityRadius * 0.5, 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
    }
    
    drawNotifications() {
        const ctx = this.ctx, startX = this.canvas.width - 10, startY = 10;
        ctx.textAlign = 'right'; ctx.font = 'bold 12px "Noto Sans KR"';
        this.notifications.forEach((notif, idx) => {
            const y = startY + idx * 25; ctx.globalAlpha = notif.opacity;
            ctx.fillStyle = '#ff6666';
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)'; ctx.lineWidth = 3;
            ctx.strokeText(notif.text, startX - 5, y + 12);
            ctx.fillText(notif.text, startX - 5, y + 12);
        });
        ctx.globalAlpha = 1; ctx.textAlign = 'left';
    }
    
    drawEntity(entity) {
        const ctx = this.ctx, x = entity.x, y = entity.y, r = this.entityRadius;
        ctx.save(); ctx.translate(x, y);
        
        if (entity.isTransforming) {
            const progress = 1 - (entity.transformTimer / 60);
            const pulseScale = 1 + Math.sin(progress * Math.PI * 6) * 0.2;
            ctx.scale(pulseScale, pulseScale);
            const greenToRed = Math.floor(progress * 255);
            ctx.fillStyle = 'rgb(' + (100 + greenToRed) + ',' + (150 - greenToRed * 0.5) + ',' + (100 - greenToRed * 0.3) + ')';
            const shake = (1 - progress) * 3;
            ctx.translate(Math.random() * shake - shake/2, Math.random() * shake - shake/2);
            ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.7, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = 'rgb(' + (150 + greenToRed * 0.4) + ',' + (180 - greenToRed * 0.5) + ',' + (150 - greenToRed * 0.4) + ')';
            ctx.beginPath(); ctx.arc(r * 0.35, 0, r * 0.35, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = 'rgba(255,' + (255 - greenToRed) + ',0,' + (0.8 - progress * 0.5) + ')';
            ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(0, 0, r + 8 + progress * 5, 0, Math.PI * 2 * progress); ctx.stroke();
            ctx.restore();
            ctx.font = 'bold ' + Math.max(12, r * 1.2) + 'px "Noto Sans KR"';
            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)'; ctx.lineWidth = 3;
            ctx.strokeText('🧟' + entity.name, x, y + r + 5);
            ctx.fillStyle = '#ffaa00'; ctx.fillText('🧟' + entity.name, x, y + r + 5);
            return;
        }
        
        if (entity.isZombie) {
            if (entity.eatingTimer > 0) {
                ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
                ctx.beginPath(); ctx.arc(0, 0, r + 5, 0, Math.PI * 2); ctx.fill();
            }
            if (!entity.hasTarget && entity.eatingTimer <= 0) {
                ctx.rotate(entity.angle);
                const fovRad = (this.zombieFovAngle / 2) * (Math.PI / 180);
                ctx.fillStyle = 'rgba(255, 50, 50, 0.08)';
                ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, this.zombieDetectRange, -fovRad, fovRad); ctx.closePath(); ctx.fill();
                ctx.rotate(-entity.angle);
            }
            ctx.rotate(entity.angle);
            ctx.fillStyle = '#4a5d4a'; ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.7, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#5a6b5a'; ctx.beginPath(); ctx.arc(r * 0.4, 0, r * 0.4, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = entity.hasTarget ? '#ff0000' : '#ff4444';
            ctx.beginPath(); ctx.arc(r * 0.5, -r * 0.1, r * 0.1, 0, Math.PI * 2); ctx.arc(r * 0.5, r * 0.1, r * 0.1, 0, Math.PI * 2); ctx.fill();
        } else {
            ctx.rotate(entity.angle);
            const fovRad = (this.humanFovAngle / 2) * (Math.PI / 180);
            ctx.fillStyle = 'rgba(255, 255, 100, 0.05)';
            ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, this.humanDetectRange, -fovRad, fovRad); ctx.closePath(); ctx.fill();
            ctx.fillStyle = entity.color; ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.65, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#FFDAB9'; ctx.beginPath(); ctx.arc(r * 0.35, 0, r * 0.35, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#333'; ctx.beginPath(); ctx.arc(r * 0.25, 0, r * 0.3, Math.PI * 0.7, -Math.PI * 0.7); ctx.fill();
            if (entity.isRunning) {
                ctx.rotate(-entity.angle); ctx.strokeStyle = '#ffff00'; ctx.lineWidth = 2;
                ctx.beginPath(); ctx.arc(0, 0, r + 3, 0, Math.PI * 2 * (entity.runTimer / this.runDuration)); ctx.stroke();
            }
        }
        ctx.restore();
        
        if (entity.helpTimer > 0 && !entity.isZombie) {
            const shake = Math.sin(Date.now() / 30) * 3;
            const helpY = y - r - 20 + shake, helpX = x + Math.sin(Date.now() / 50) * 2;
            ctx.font = 'bold 14px "Noto Sans KR"'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
            ctx.shadowColor = 'rgba(255, 0, 0, 0.3)'; ctx.shadowBlur = 3;
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)'; ctx.lineWidth = 3; ctx.strokeText('Help!!', helpX, helpY);
            ctx.fillStyle = '#ff4444'; ctx.fillText('Help!!', helpX, helpY);
            ctx.shadowBlur = 0;
        }
        
        ctx.font = 'bold ' + Math.max(12, r * 1.2) + 'px "Noto Sans KR"';
        ctx.textAlign = 'center'; ctx.textBaseline = 'top';
        const shortName = entity.name.length > 6 ? entity.name.slice(0, 5) + '..' : entity.name;
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)'; ctx.lineWidth = 3; ctx.strokeText(shortName, x, y + r + 5);
        ctx.fillStyle = entity.isZombie ? '#ff6666' : '#fff'; ctx.fillText(shortName, x, y + r + 5);
    }
    
    endGame(winners) {
        this.isRunning = false; this.endTime = Date.now();
        this.setControlsDisabled(false);
        document.getElementById('shrinkWarning').style.display = 'none';
        this.updateUI();
        if (winners && winners.length > 0) {
            const survivalTime = ((this.endTime - this.startTime) / 1000).toFixed(1);
            const winnerNames = winners.map(w => w.name).join(', ');
            document.getElementById('winnerName').textContent = winnerNames;
            document.getElementById('winnerStats').textContent = t('survivalTime', { time: survivalTime });
            document.getElementById('winnerOverlay').classList.add('show');
        }
        this.updateRanking();
    }
    
    updateRanking() {
        const list = document.getElementById('rankingList');
        if (this.infectedOrder.length === 0 && !this.isRunning) {
            list.innerHTML = '<div class="ranking-placeholder">' + t('rankingPlaceholder') + '</div>'; return;
        }
        let html = '';
        
        // 생존자 먼저 (상단)
        const survivors = this.entities.filter(e => !e.isZombie && !e.isTransforming);
        survivors.forEach(survivor => {
            const isWinner = survivors.length <= this.survivorCount && !this.isRunning;
            html += '<div class="ranking-item ' + (isWinner ? 'winner' : 'survivor') + '"><span class="ranking-rank">' + (isWinner ? '🏆' : '🧑') + '</span><span class="ranking-name">' + survivor.name + '</span><span class="ranking-status">' + (isWinner ? t('winner') : t('survivor')) + '</span></div>';
        });
        
        // 구분선
        if (survivors.length > 0 && this.infectedOrder.length > 0) {
            html += '<div class="ranking-divider"></div>';
        }
        
        // 감염된 순서 (역순 - 최근 감염자가 위로)
        const reversedInfected = [...this.infectedOrder].reverse();
        reversedInfected.forEach((infected) => {
            const originalIdx = this.infectedOrder.indexOf(infected);
            const time = (infected.time / 1000).toFixed(1);
            html += '<div class="ranking-item infected"><span class="ranking-rank">' + (originalIdx + 1) + '</span><span class="ranking-name">🧟 ' + infected.name + '</span><span class="ranking-status">' + time + 's</span></div>';
        });
        
        // 초기 좀비 (최하단)
        const initialZombies = this.entities.filter(e => e.isInitialZombie);
        if (initialZombies.length > 0) {
            html += '<div style="border-top: 1px solid rgba(255,255,255,0.1); margin: 6px 0; padding-top: 6px; font-size: 0.6rem; color: #666;">' + t('initialZombie') + '</div>';
            initialZombies.forEach(zombie => {
                html += '<div class="ranking-item infected" style="opacity: 0.6;"><span class="ranking-rank">🧟</span><span class="ranking-name">' + zombie.name + '</span><span class="ranking-status">-</span></div>';
            });
        }
        list.innerHTML = html;
    }
    
    updateUI() {
        const humans = this.entities.filter(e => !e.isZombie && !e.isTransforming);
        const zombies = this.entities.filter(e => e.isZombie);
        document.getElementById('humanCount').textContent = humans.length;
        document.getElementById('zombieCountDisplay').textContent = zombies.length;
        if (this.isRunning) {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
            const seconds = (elapsed % 60).toString().padStart(2, '0');
            document.getElementById('timerDisplay').textContent = minutes + ':' + seconds;
        }
    }
    
    getResultText() {
        const endTimeToUse = this.endTime || Date.now();
        const elapsed = this.startTime ? ((endTimeToUse - this.startTime) / 1000).toFixed(1) : 0;
        let result = t('resultTitle') + '\n━━━━━━━━━━━━━━\n' + t('gameTime', { time: elapsed }) + '\n\n';
        const survivors = this.entities.filter(e => !e.isZombie && !e.isTransforming);
        if (survivors.length > 0) {
            result += t('finalSurvivors') + '\n';
            survivors.forEach(s => { result += '   ' + s.name + '\n'; });
            result += '\n';
        }
        if (this.infectedOrder.length > 0) {
            result += t('infectionOrderResult') + '\n';
            this.infectedOrder.forEach((infected, idx) => {
                const time = (infected.time / 1000).toFixed(1);
                result += '   ' + (idx + 1) + '. ' + infected.name + ' (' + time + 's)\n';
            });
        }
        result += '\n🎮 https://github.com/geniuskey/zombie-arena';
        return result;
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message; toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    currentLang = localStorage.getItem('zombie-arena-lang') || detectLanguage();
    document.getElementById('langSelect').value = currentLang;
    updateUI18n();
    
    const canvas = document.getElementById('gameCanvas');
    const game = new ZombieSurvival(canvas);
    const participantsInput = document.getElementById('participants');
    const zombieCountSlider = document.getElementById('zombieCount');
    const zombieValueDisplay = document.getElementById('zombieValue');
    const survivorCountSlider = document.getElementById('survivorCount');
    const survivorValueDisplay = document.getElementById('survivorValue');
    
    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('zombie-arena-lang', currentLang);
        updateUI18n(); game.updateRanking();
    });
    
    function parseParticipants(text) { return text.split(/[\n,]+/).map(s => s.trim()).filter(Boolean); }
    function updateGame() { game.setParticipants(parseParticipants(participantsInput.value)); }
    
    participantsInput.addEventListener('input', () => {
        updateGame();
        localStorage.setItem('zombie-arena-participants', participantsInput.value);
    });
    
    zombieCountSlider.addEventListener('input', () => {
        zombieValueDisplay.textContent = zombieCountSlider.value;
        game.zombieCount = parseInt(zombieCountSlider.value);
        if (!game.isRunning) game.reset();
    });
    
    survivorCountSlider.addEventListener('input', () => {
        survivorValueDisplay.textContent = survivorCountSlider.value;
        game.survivorCount = parseInt(survivorCountSlider.value);
    });
    
    document.getElementById('startBtn').addEventListener('click', () => {
        const participants = parseParticipants(participantsInput.value);
        if (participants.length < 2) { alert(t('minParticipants')); return; }
        if (game.survivorCount >= participants.length) { alert(t('survivorError')); return; }
        game.setParticipants(participants); game.start();
    });
    
    document.getElementById('resetBtn').addEventListener('click', () => { game.stop(); game.reset(); });
    document.getElementById('helpBtn').addEventListener('click', () => document.getElementById('helpModal').classList.add('show'));
    document.getElementById('closeHelpBtn').addEventListener('click', () => document.getElementById('helpModal').classList.remove('show'));
    document.getElementById('helpModal').addEventListener('click', (e) => { if (e.target.id === 'helpModal') document.getElementById('helpModal').classList.remove('show'); });
    document.getElementById('closeWinnerBtn').addEventListener('click', () => document.getElementById('winnerOverlay').classList.remove('show'));
    
    document.getElementById('copyResultBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(game.getResultText()).then(() => showToast(t('copied'))).catch(() => showToast(t('copyFailed')));
    });
    
    const saved = localStorage.getItem('zombie-arena-participants');
    if (saved) { participantsInput.value = saved; updateGame(); }
    
    game.draw();
});
